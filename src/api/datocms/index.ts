import { GraphQLClient } from 'graphql-request';

import { IRequestParams } from '@/api/datocms/types';

export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: IRequestParams) {
  const headers: Record<string, string> = {
    authorization: `Bearer ${process.env.DATO_CMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(query, variables);
}
