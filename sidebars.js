/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  MainSidebar: [


    {
      type: 'category',
      label: 'About',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'What is RisingWave?',
        },
        {
          type: 'doc',
          id: 'use-cases',
          label: 'Use cases',
        },
        {
          type: 'doc',
          id: 'architecture',
          label: 'Architecture',
        },

        {
          type: 'doc',
          id: 'key-concepts',
          label: 'Key concepts and terms',
        },
        {
          type: 'doc',
          label: 'Fault tolerance',
          id: 'fault-tolerance',
        },
        {
          type: 'doc',
          label: 'Data persistence',
          id: 'data-persistence',
        },
        {
          type: 'doc',
          label: 'RisingWave vs. Flink',
          id: 'risingwave-flink-comparison',
        },
        {
          type: 'doc',
          label: 'Telemetry',
          id: 'telemetry'
        },
        {
          type: 'doc',
          label: 'Release Notes',
          id: 'release-notes'
        }
      ]
    },


    {
      type: 'category',
      label: 'Setup',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'get-started'
        },
        {
          type: 'category',
          label: 'Run locally',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'deploy/risingwave-local',
              label: 'Run on host'
            },
            {
              type: 'category',
              label: 'Run in container',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'deploy/risingwave-docker-image',
                  label: 'Docker'
                },
                {
                  type: 'doc',
                  id: 'deploy/risingwave-docker-compose',
                  label: 'Docker Compose'
                },
                {
                  type: 'doc',
                  id: 'deploy/risingwave-kubernetes',
                  label: 'Kubernetes'
                }
              ]
            },
            {
              type: 'doc',
              id: 'guides/install-psql-without-postgresql'
            }
          ]
        },
        {
          type: 'link',
          label: 'Run in cloud',
          href: '/docs/current/get-started/?method=cloud#run-risingwave',
        },
        {
          type: 'link',
          label: 'Try from browser',
          href: '/docs/current/get-started/?method=playground#run-risingwave',
        }
      ]
    },



    {
      type: 'category',
      label: 'Learn & explore',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'risingwave-sql-101',
          label: 'RisingWave SQL 101'
        },
        {
          type: 'category',
          label: 'Demos',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'tutorials/real-time-ad-performance-analysis',
              label: 'Real-time ad performance analysis'
            },
            {
              type: 'doc',
              id: 'tutorials/server-performance-anomaly-detection',
              label: 'Server performance anomaly detection'
            },
            {
              type: 'doc',
              id: 'tutorials/fast-twitter-events-processing',
              label: 'Fast Twitter events processing'
            },
            {
              type: 'doc',
              id: 'tutorials/clickstream-analysis',
              label: 'Clickstream analysis'
            },
            {
              type: 'doc',
              id: 'tutorials/live-stream-metrics-analysis',
              label: 'Live stream metrics analysis'
            },
            {
              type: 'doc',
              id: 'tutorials/use-risingwave-to-monitor-risingwave-metrics',
              label: 'Use RisingWave to monitor RisingWave metrics'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Ecosystem',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Integrations',
          id: 'rw-integration-summary'
        },
        {
          type: 'category',
          label: 'Sources',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'data-ingestion',
            },
            {
              type: 'category',
              label: 'Connections',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'AWS PrivateLink',
                  id: 'guides/aws-privatelink-setup',
                },
              ]
            },
            {
              type: 'doc',
              label: 'Apache Kafka',
              id: 'create-source/create-source-kafka',
            },
            {
              type: 'doc',
              label: 'Apache Pulsar',
              id: 'create-source/create-source-pulsar',
            },
            {
              type: 'doc',
              label: 'AWS Kinesis',
              id: 'create-source/create-source-kinesis',
            },
            {
              type: 'doc',
              label: 'AWS S3',
              id: 'create-source/create-source-s3',
            },
            {
              type: 'doc',
              label: 'CDC via event streaming systems',
              id: 'create-source/create-source-cdc',
            },
            {
              type: 'doc',
              label: 'Confluent Cloud',
              id: 'guides/confluent-kafka-source',
            },

            {
              type: 'doc',
              label: 'DataStax Astra Streaming',
              id: 'guides/connector-astra-streaming',
            },
            {
              type: 'doc',
              label: 'Load generator',
              id: 'create-source/create-source-datagen',
            },
            {
              type: 'doc',
              label: 'MySQL CDC',
              id: 'guides/ingest-from-mysql-cdc'
            },
            {
              type: 'doc',
              label: 'PostgreSQL CDC',
              id: 'guides/ingest-from-postgres-cdc'
            },
            {
              type: 'doc',
              label: 'Redpanda',
              id: 'create-source/create-source-redpanda',
            },
          ]
        },
        {
          type: 'category',
          label: 'Sinks',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'delivery-overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              label: 'Kafka',
              id: 'guides/create-sink-kafka'
            },
            {
              type: 'doc',
              label: 'MySQL',
              id: 'guides/sink-to-mysql-with-jdbc'
            },
            {
              type: 'doc',
              label: 'PostgreSQL',
              id: 'guides/sink-to-postgres'
            },
            {
              type: 'doc',
              label: 'TiDB',
              id: 'guides/sink-to-tidb'
            },
            {
              type: 'doc',
              label: 'Apache Iceberg',
              id: 'guides/sink-to-iceberg'
            }
          ]
        },
        {
          type: 'category',
          label: 'Visualization',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Grafana',
              id: 'guides/grafana-integration'
            },
            {
              type: 'doc',
              label: 'Superset',
              id: 'guides/superset-integration'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Develop',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'SQL references',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'generated-index',
            'title': 'SQL references',
            'slug': '/sql-references',
            'keywords': [
              'SQL'
            ]
          },
          items: [
            {
              type: 'category',
              label: 'Commands',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'generated-index',
                'title': 'SQL commands',
                'description': 'Overview of the SQL commands supported by RisingWave.',
                'slug': '/sql-commands',
                'keywords': [
                  'SQL, commands'
                ]
              },
              items: [
                {
                  type: 'autogenerated',
                  'dirName': 'sql/commands'
                }
              ]
            },
            {
              type: 'category',
              label: 'Query syntax',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'generated-index',
                'title': 'Query syntax',
                'description': 'Syntax and usage of common query clauses.',
                'slug': '/query-syntax',
                'keywords': [
                  'query, syntax'
                ]
              },
              items: [
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-value-exp',
                  label: 'Value expressions',
                },
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-generated-columns',
                  label: 'Generated columns',
                },
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-from-clause',
                  label: 'FROM clause',
                },
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-group-by-clause',
                  label: 'GROUP BY clause',
                },
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-having-clause',
                  label: 'HAVING clause',
                },
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-limit-clause',
                  label: 'LIMIT clause',
                },
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-values-clause',
                  label: 'VALUES clause',
                },
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-where-clause',
                  label: 'WHERE clause',
                },
                {
                  type: 'doc',
                  id: 'sql/query-syntax/query-syntax-with-clause',
                  label: 'WITH clause',
                }
              ]
            },
            {
              type: 'category',
              label: 'Data types',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'sql/sql-data-types',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'sql/data-types/data-type-array',
                  label: 'Array',
                },
                {
                  type: 'doc',
                  id: 'sql/data-types/data-type-casting',
                  label: 'Casting',
                },
                {
                  type: 'doc',
                  id: 'sql/data-types/data-type-jsonb',
                  label: 'JSONB',
                },
                {
                  type: 'doc',
                  id: 'sql/data-types/data-type-struct',
                  label: 'Struct',
                }
              ]
            },
            {
              type: 'category',
              label: 'Functions and operators',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'generated-index',
                'title': 'SQL functions and operators',
                'description': 'Functions and operators that can be used in SQL queries.',
                'slug': '/sql-functions',
                'keywords': [
                  'function, operator'
                ]
              },
              items: [
                {
                  type: 'doc',
                  id: 'sql/functions-operators/user-defined-functions',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-logical',
                  label: 'Logical',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-comparison',
                  label: 'Comparison',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-time-window',
                  label: 'Time window',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-cast',
                  label: 'Cast',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-mathematical',
                  label: 'Mathematical',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-bitstring',
                  label: 'Bit string',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-string',
                  label: 'String',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-datetime',
                  label: 'Date/time',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-aggregate',
                  label: 'Aggregate',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-conditional',
                  label: 'Conditional',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-sys-info',
                  label: 'System information',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-array',
                  label: 'Array',
                },
                {
                  type: 'doc',
                  id: 'sql/functions-operators/sql-function-set',
                  label: 'Set',
                }
              ]
            },
            {
              type: 'category',
              label: 'Patterns',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'generated-index',
                'title': 'Query patterns',
                'description': 'Commonly used patterns and techniques that can help build a more efficient data processing workflow.',
                'slug': '/sql-patterns',
                'keywords': [
                  'pattern'
                ]
              },
              items: [
                {
                  type: 'doc',
                  id: 'sql/syntax/sql-pattern-dynamic-filters',
                  label: 'Dynamic filters'
                },
                {
                  type: 'doc',
                  id: 'sql/syntax/sql-pattern-temporal-filters',
                  label: 'Temporal filters'
                },
                {
                  type: 'doc',
                  id: 'sql/syntax/sql-pattern-topn',
                  label: 'Top-N by group'
                }
              ]
            },
            {
              type: 'doc',
              id: 'sql/sql-identifiers',
              label: 'Identifiers'
            },
            {
              type: 'category',
              label: 'System catalogs',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'sql/system-catalogs/information-schema',
                  label: 'information_schema',
                },
                {
                  type: 'doc',
                  id: 'sql/system-catalogs/pg-catalog-function',
                  label: 'PostgreSQL catalogs and functions',
                }
              ]
            },
            {
              type: 'doc',
              id: 'sql/psql-commands'
            }
          ]
        },
        {
          type: 'category',
          label: 'Client libraries',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'dev/java-client-libraries',
              label: 'Java',
            },
            {
              type: 'doc',
              id: 'dev/nodejs-client-libraries',
              label: 'Node.js',
            },
            {
              type: 'doc',
              id: 'dev/python-client-libraries',
              label: 'Python',
            },
            {
              type: 'doc',
              id: 'dev/go-client-libraries',
              label: 'Go',
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Manage',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'manage/view-statement-progress',
        },
        {
          type: 'doc',
          id: 'manage/view-adjust-system-parameters',
        },
        {
          type: 'doc',
          id: 'manage/meta-backup',
        },
      ]
    }
  ]

};


module.exports = sidebars;
