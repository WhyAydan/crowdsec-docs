/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.



 - regrouper les choses oriente utilisateur (genre gestion des decisions etc.) dans la partie user guide
 - avoir un item 'profil' de premier level (ou on parle des notifs/plugins)
 - regrouper central et local api (? hes:bof)
 - regrouper : dashboard et observability
 - dupliquer des liens vers le format de config des parsers/scenarios/... entre la partie "parsers" et la partie "configuration files format"


 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually
  tutorialSidebar: [

    {
      type: "doc",
      id: "intro"
    },
    {
      type: 'doc',
      label: 'Concepts',
      id: "concepts"
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        "getting_started/install_crowdsec", 
        "getting_started/install_crowdsec_freebsd", 
        {"type":"link", "label": "Install CrowdSec (Helm/K8s)", "href":"https://artifacthub.io/packages/helm/crowdsec/crowdsec"},
        {"type":"link", "label": "Install CrowdSec (docker)", "href":"https://hub.docker.com/r/crowdsecurity/crowdsec"},
        "getting_started/install_windows",
        "getting_started/crowdsec_tour"]
    },
    {
      type: 'category',
      label: 'User Guides',
      items: ["user_guides/hub_mgmt", "user_guides/decisions_mgmt", "user_guides/bouncers_configuration", "user_guides/machines_mgmt", "user_guides/lapi_mgmt","user_guides/building", "user_guides/replay_mode", "user_guides/cscli_explain", "user_guides/cscli_macos", "user_guides/multiserver_setup"]
    },
    {
      type: 'category',
      label: 'Data Sources',
      items: ["data_sources/intro", "data_sources/file", "data_sources/journald", "data_sources/cloudwatch", "data_sources/kinesis", "data_sources/syslog", "data_sources/docker", "data_sources/windows_evt_log", "data_sources/troubleshoot" ]
    },
    {
      type: 'category',
      label: 'Parsers',
      items: ["parsers/intro", "parsers/format","parsers/create", "parsers/enricher", "parsers/patterns"]
    },
    {
      type: 'category',
      label: 'Scenarios',
      items: ["scenarios/intro", "scenarios/format", "scenarios/simulation","scenarios/create" ]
    },
    {
      type: 'category',
      label: 'Collections',
      items: ["collections/intro", "collections/format"]
    },
    {
      type: 'category',
      label: 'Whitelists',
      items: ["whitelist/intro", "whitelist/format", "whitelist/create" ]
    },
    {
      type: 'category',
      label: 'Profiles',
      items: ["profiles/intro", "profiles/format"]
    },
    {
      type: 'category',
      label: 'Notification plugins',
      items: ["notification_plugins/intro", "notification_plugins/http","notification_plugins/email", "notification_plugins/slack", "notification_plugins/splunk", "notification_plugins/teams", "notification_plugins/elastic", "notification_plugins/writing_your_own_plugin"]
    },
    {
      type: 'category',
      label: 'Configuration',
      items: ["configuration/crowdsec_configuration", "configuration/network_management"]
    },
    {
      type: 'category',
      label: 'Observability',
      items: ["observability/intro", "observability/cscli", "observability/prometheus", "observability/dashboard", "observability/pprof"]
    },
    {
      type: 'category',
      label: 'Local API',
      items: ["local_api/intro", "local_api/database" , "local_api/bouncers", {"type":"link", "label": "Swagger", "href":"https://crowdsecurity.github.io/api_doc/index.html?urls.primaryName=LAPI"}]
    },
    {
      type: 'category',
      label: 'Central API',
      items: ["central_api/intro", {"type":"link", "label": "Swagger", "href":"https://crowdsecurity.github.io/api_doc/index.html?urls.primaryName=CAPI"}]
    },
    {
      type: 'category',
      label: 'Expr',
      items: ["expr/helpers", "expr/event", "expr/alert", "expr/decision"]
    },
    {
      type: 'category',
      label: 'Contributing',
      items: ["contributing/contributing_test_env", "contributing/contributing_code", "contributing/contributing_hub", "contributing/contributing_doc"]
    },
    {
      type: 'doc',
      label: 'Console',
      id: "console"
    },
    {
      type: 'doc',
      label: 'Contact the team',
      id: "contact_team"
    },
  ],
  cscliSidebar: [
        {
          type: 'doc',
          label: 'cscli',
          id: 'cscli/cscli'
        },
        {
          type: "category",
          label: "cscli alerts",
          items: ["cscli/cscli_alerts","cscli/cscli_alerts_delete","cscli/cscli_alerts_flush","cscli/cscli_alerts_inspect","cscli/cscli_alerts_list"]
        },
        {
          type: "category",
          label: "cscli bouncers",
          items: ["cscli/cscli_bouncers","cscli/cscli_bouncers_add","cscli/cscli_bouncers_delete",
          "cscli/cscli_bouncers_list"]
        },
        {
          type: "category",
          label: "cscli capi",
          items: ["cscli/cscli_capi","cscli/cscli_capi_register","cscli/cscli_capi_status"]
        },
        {
          type: "category",
          label: "cscli collections",
          items: ["cscli/cscli_collections","cscli/cscli_collections_inspect","cscli/cscli_collections_install",
          "cscli/cscli_collections_list","cscli/cscli_collections_remove","cscli/cscli_collections_upgrade"]
        },
        {
          type: "category",
          label: "cscli completion",
          items: ["cscli/cscli_completion"]
        },
        {
          type: "category",
          label: "cscli config",
          items: ["cscli/cscli_config","cscli/cscli_config_backup","cscli/cscli_config_restore",
          "cscli/cscli_config_show"]
        },
        {
          type: "category",
          label: "cscli console",
          items: ["cscli/cscli_console","cscli/cscli_console_enroll"]
        },
        {
          type: "category",
          label: "cscli dashboard",
          items: ["cscli/cscli_dashboard","cscli/cscli_dashboard_remove","cscli/cscli_dashboard_setup","cscli/cscli_dashboard_start","cscli/cscli_dashboard_stop"] 
        },
        {
          type: "category",
          label: "cscli decisions",
          items: ["cscli/cscli_decisions","cscli/cscli_decisions_add","cscli/cscli_decisions_delete","cscli/cscli_decisions_list", "cscli/cscli_decisions_import"] 
        },
        {
          type: "category",
          label: "cscli hub",
          items: ["cscli/cscli_hub","cscli/cscli_hub_list","cscli/cscli_hub_update","cscli/cscli_hub_upgrade"]
        },
        {
          type: "category",
          label: "cscli explain",
          items: ["cscli/cscli_explain"]
        },
        {
          type: "category",
          label: "cscli lapi",
          items: ["cscli/cscli_lapi","cscli/cscli_lapi_register","cscli/cscli_lapi_status"]
        },
        {
          type: "category",
          label: "cscli machines",
          items: ["cscli/cscli_machines","cscli/cscli_machines_add","cscli/cscli_machines_delete","cscli/cscli_machines_list","cscli/cscli_machines_validate"]
        },
        {
          type: "category",
          label: "cscli metrics",
          items: ["cscli/cscli_metrics"]
        },
        {
          type: "category",
          label: "cscli parsers",
          items: [ "cscli/cscli_parsers","cscli/cscli_parsers_inspect","cscli/cscli_parsers_install","cscli/cscli_parsers_list","cscli/cscli_parsers_remove","cscli/cscli_parsers_upgrade"]
        },
        {
          type: "category",
          label: "cscli postoverflows",
          items: ["cscli/cscli_postoverflows","cscli/cscli_postoverflows_inspect","cscli/cscli_postoverflows_install","cscli/cscli_postoverflows_list","cscli/cscli_postoverflows_remove","cscli/cscli_postoverflows_upgrade"]
        },
        {
          type: "category",
          label: "cscli scenarios",
          items: ["cscli/cscli_scenarios","cscli/cscli_scenarios_inspect","cscli/cscli_scenarios_install","cscli/cscli_scenarios_list","cscli/cscli_scenarios_remove","cscli/cscli_scenarios_upgrade"]
        },
        {
          type: "category",
          label: "cscli hubtest",
          items: ["cscli/cscli_hubtest","cscli/cscli_hubtest_create","cscli/cscli_hubtest_run","cscli/cscli_hubtest_eval","cscli/cscli_hubtest_explain","cscli/cscli_hubtest_coverage", "cscli/cscli_hubtest_info", "cscli/cscli_hubtest_list", "cscli/cscli_hubtest_clean"]
        },
        {
          type: "category",
          label: "cscli simulation",
          items: ["cscli/cscli_simulation","cscli/cscli_simulation_disable","cscli/cscli_simulation_enable","cscli/cscli_simulation_status"]
        },
        {
          type: "category",
          label: "cscli version",
          items: ["cscli/cscli_version"]
        }
  ],
  bouncersSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: "bouncers/intro"
    },
    {
      type: 'doc',
      label: 'Firewall Bouncer',
      id: "bouncers/firewall"
    },
    {
      type: 'doc',
      label: 'Nginx Bouncer',
      id: "bouncers/nginx"
    },
    {
      type: 'doc',
      label: 'OpenResty Bouncer',
      id: "bouncers/openresty"
    },
    {
      type: 'doc',
      label: 'Ingress Nginx Bouncer',
      id: "bouncers/ingress-nginx"
    },
    {
      type: 'doc',
      label: 'Custom Bouncer',
      id: "bouncers/custom"
    },
    {
      type: 'doc',
      label: 'Cloudflare Bouncer',
      id: "bouncers/cloudflare"
    },
    {
      type: 'doc',
      label: 'Wordpress Bouncer',
      id: "bouncers/wordpress"
    },
    {
      type: 'doc',
      label: 'PHP Bouncer',
      id: "bouncers/php"
    },
    {
      type:"link",
      label: "Hub",
      href:"https://hub.crowdsec.net/browse/#bouncers"
    },
    {
      type: 'doc',
      label: "Contributing",
      id: "contributing/contributing_bouncers"
    },
  ],
};
