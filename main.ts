import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import {CloudflareProvider} from './.gen/providers/cloudflare/cloudflare-provider'
import {Record} from './.gen/providers/cloudflare/record'

const zoneId = '3247af29b359cec0202064889b5099d9'


class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Set Provider
    new CloudflareProvider(this, 'Cloudflare', {
      apiToken: process.env.CF_TOKEN
    });

    // Define resources
    new Record(this, 'TestRecord',{
      zoneId: zoneId,
      name: 'testrecord',
      type: 'A',
      value: '10.10.10.10'
    });

  }
}

const app = new App();
new MyStack(app, 'cdktf-cloudflare');
app.synth();
