---
id: cscli_machines_validate
title: cscli machines validate
---
## cscli machines validate

validate a machine to access the local API

### Synopsis

validate a machine to access the local API.

```
cscli machines validate [flags]
```

### Examples

```
cscli machines validate "machine_name"
```

### Options

```
  -h, --help   help for validate
```

### Options inherited from parent commands

```
      --color string    Output color: yes, no, auto. (default "auto")
  -c, --config string   path to crowdsec config file (default "/etc/crowdsec/config.yaml")
      --debug           Set logging to debug.
      --error           Set logging to error.
      --info            Set logging to info.
  -o, --output string   Output format: human, json, raw.
      --trace           Set logging to trace.
      --warning         Set logging to warning.
```

### SEE ALSO

* [cscli machines](/cscli/cscli_machines.md)	 - Manage local API machines [requires local API]

