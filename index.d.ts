export interface RunnerOptions {
    apiKey: string;
    rules?: any;
  }
  
  export function runner(code: string, options: RunnerOptions): Promise<any>;
  export function waxObserver(options: RunnerOptions): MutationObserver;