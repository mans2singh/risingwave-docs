---
id: ingest-from-s3
title: Ingest data from S3 buckets
description: Ingest data from S3 buckets
slug: /ingest-from-s3
---
<head>
  <link rel="canonical" href="https://docs.risingwave.com/docs/current/ingest-from-s3/" />
</head>

Use the SQL statement below to connect RisingWave to an Amazon S3 source.

## Syntax

```sql
CREATE SOURCE [ IF NOT EXISTS ] source_name 
schema_definition
WITH (
   connector={ 's3' | 's3_v2' },
   connector_parameter='value', ...
)
FORMAT data_format ENCODE data_encode (
   without_header = 'true' | 'false',
   delimiter = 'delimiter'
); 
```

:::info
For CSV data, specify the delimiter in the `delimiter` option in `ENCODE properties`.
:::

import rr from '@theme/RailroadDiagram'

export const svg = rr.Diagram(
    rr.Stack(
        rr.Sequence(
            rr.Terminal('CREATE SOURCE'),
            rr.Optional(rr.Terminal('IF NOT EXISTS')),
            rr.NonTerminal('source_name', 'skip')
        ),
        rr.NonTerminal('schema_definition', 'skip'),
        rr.Sequence(
            rr.Terminal('FORMAT'),
            rr.NonTerminal('format', 'skip')
        ),
        rr.Sequence(
            rr.Terminal('ENCODE'),
            rr.NonTerminal('encode', 'skip'),
            rr.Optional(
                rr.Sequence(
                rr.Terminal('('),
                rr.NonTerminal('encode_parameter', 'skip'),
                rr.Terminal(')'),
                ),
            ),
        ),
        rr.Sequence(
            rr.Terminal('WITH'),
            rr.Terminal('('),
            rr.Stack(
                rr.Stack(
                    rr.Sequence(
                        rr.Terminal('connector'),
                        rr.Terminal('='),
                        rr.Choice(1,
                            rr.Terminal('\'s3\''),
                            rr.Terminal('\'s3_v2\'')
                        ),
                        rr.Terminal(','),
                    ),
                    rr.OneOrMore(
                        rr.Sequence(
                            rr.NonTerminal('connector_parameter', 'skip'),
                            rr.Terminal('='),
                            rr.Terminal('\''),
                            rr.NonTerminal('value', 'skip'),
                            rr.Terminal('\''),
                            rr.Terminal(','),
                        ),
                    ),
                ),
                rr.Terminal(')'),
            ),
        ),
        rr.Terminal(';'),
    )
);

<drawer SVG={svg} />

**schema_definition**:

```sql
(
   column_name data_type [ PRIMARY KEY ], ...
   [ PRIMARY KEY ( column_name, ... ) ]
)
```

## Parameters

|Field|Notes|
|---|---|
|connector|Required. Select between the `s3` and `s3_v2` (recommended) connector. [Learn more about `s3_v2`](#s3_v2-connector).|
|s3.region_name |Required. The service region.|
|s3.bucket_name |Required. The name of the bucket the data source is stored in. |
|s3.credentials.access|Required. This field indicates the access key ID of AWS. |
|s3.credentials.secret|Required. This field indicates the secret access key of AWS.|
|match_pattern| Conditional. This field is used to find object keys in `s3.bucket_name` that match the given pattern. Standard Unix-style [glob](https://en.wikipedia.org/wiki/Glob_(programming)) syntax is supported. |
|s3.endpoint_url| Conditional. The host URL for an S3-compatible object storage server. This allows users to use a different server instead of the standard S3 server. |

:::note
Empty cells in CSV files will be parsed to `NULL`.
:::

|Field|Notes|
|---|---|
|*data_format*| Supported data format: `PLAIN`. |
|*data_encode*| Supported data encodes: `CSV`, `JSON`. |
|*without_header*| Whether the first line is header. Accepted values: `'true'`, `'false'`. Default: `'true'`.|
|*delimiter*| How RisingWave splits contents. For `JSON` encode, the delimiter is `\n`. |

### `s3_v2` connector

:::note BETA FEATURE

The `s3_v2` connector is currently in Beta. Please contact us if you encounter any issues or have feedback.

:::

The `s3` connector treats files as splits, resulting in poor scalability and potential timeouts when dealing with a large number of files.

The `s3_v2` connector is designed to address the scalability and performance limitations of the `s3` connector by implementing a more efficient listing and fetching mechanism. If you want to explore the technical details of this new approach, refer to [the design document](https://github.com/risingwavelabs/rfcs/blob/main/rfcs/0076-refined-s3-source.md).

## Example

Here are examples of connecting RisingWave to an S3 source to read data from individual streams.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="csv" label="CSV" default>

```sql
CREATE TABLE s(
    id int,
    name varchar,
    age int,
    primary key(id)
) 
WITH (
    connector = 's3_v2',
    s3.region_name = 'ap-southeast-2',
    s3.bucket_name = 'example-s3-source',
    s3.credentials.access = 'xxxxx',
    s3.credentials.secret = 'xxxxx'
) FORMAT PLAIN ENCODE CSV (
    without_header = 'true',
    delimiter = ','
);
```

</TabItem>
<TabItem value="json" label="JSON" default>

```sql
CREATE TABLE s3( 
    id int,
    name TEXT,
    age int,
    mark int,
)
WITH (
    connector = 's3_v2',
    match_pattern = '%Ring%*.ndjson',
    s3.region_name = 'ap-southeast-2',
    s3.bucket_name = 'example-s3-source',
    s3.credentials.access = 'xxxxx',
    s3.credentials.secret = 'xxxxx',
    s3.endpoint_url = 'https://s3.us-east-1.amazonaws.com'
) FORMAT PLAIN ENCODE JSON;
```

</TabItem>
</Tabs>
