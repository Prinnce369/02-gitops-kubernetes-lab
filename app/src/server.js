import express from 'express';
import helmet from 'helmet';

const app = express();
const port = Number(process.env.PORT || 3000);
const version = process.env.APP_VERSION || 'local-dev';

app.use(helmet());

app.get('/', (_req, res) => {
  res.json({
    service: 'gitops-kubernetes-lab',
    version,
    message: 'Hello from a GitOps-managed Kubernetes app.',
  });
});

app.get('/healthz', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/readyz', (_req, res) => {
  res.json({ ready: true });
});

app.listen(port, () => console.log(`GitOps lab app listening on ${port}`));
