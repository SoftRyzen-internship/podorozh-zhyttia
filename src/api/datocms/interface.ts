export interface IRequestParams {
  query: string;
  variables: Record<string, number>;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}
