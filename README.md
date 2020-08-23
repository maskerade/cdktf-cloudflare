# Cloudflare DNS Records

A simple demo to show using CDK for Terraform with the Cloudflare provider.

To run the demo:
- Clone the repo.
- Add your Cloudflare Token as an environment variable `CF_TOKEN`.
- Replace `zoneId` with the Id for your domain zone.

### Synthesizing

```shell
$cdktf synth 
```

### Deploying

Generated Terraform code in the output directory: cdktf.out

```shell
❯ cdktf deploy --auto-approve
Deploying Stack: cdktf-cloudflare 
Resources
 ✔ CLOUDFLARE_RECORD   TestRecord                cloudflare_record.cdktfcloudflare_TestRecord_3AD3EEC7
```
Summary: 1 created, 0 updated, 0 destroyed.


### Demo

[![asciicast](https://asciinema.org/a/XU0s6I2QklFTkKJBxo6V5bg9X.png)](https://asciinema.org/a/XU0s6I2QklFTkKJBxo6V5bg9X)




## Links

- https://github.com/hashicorp/terraform-cdk