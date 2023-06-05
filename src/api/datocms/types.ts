export interface IRequestParams {
  query: string;
  variables: Record<string, any>;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}
