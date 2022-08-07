import { Construct } from 'constructs';
import { App, Chart, ChartProps, Include } from 'cdk8s';

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);

    // define resources here  
    new Include(this, 'dashboard', {
      url: `${__dirname}/dashboard.yaml`
    });

  }
}

const app = new App();
new MyChart(app, 'kubernetes-dashboard');
app.synth();
