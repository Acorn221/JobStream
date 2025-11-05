export enum AvailableModels {
	GPT4 = 'gpt-4',
	GPT4_0314 = 'gpt-4-0314',
	GPT4_0613 = 'gpt-4-0613',
	GPT4_32k = 'gpt-4-32k',
	GPT4_32k_0314 = 'gpt-4-32k-0314',
	GPT4_32k_0613 = 'gpt-4-32k-0613',
	GPT3_5_TURBO = 'gpt-3.5-turbo',
	GPT3_5_TURBO_16k = 'gpt-3.5-turbo-16k',
	GPT3_5_TURBO_0301 = 'gpt-3.5-turbo-0301',
	GPT3_5_TURBO_0613 = 'gpt-3.5-turbo-0613',
	GPT3_5_TURBO_16k_0613 = 'gpt-3.5-turbo-16k-0613',
}

// credit cost per cover letter generated, with each model
export const coverLetterModelCost = {
  [AvailableModels.GPT4]: 15,
  [AvailableModels.GPT4_0314]: 1,
  [AvailableModels.GPT4_0613]: 1,
  [AvailableModels.GPT4_32k]: 25,
  [AvailableModels.GPT4_32k_0314]: 25,
  [AvailableModels.GPT4_32k_0613]: 25,
  [AvailableModels.GPT3_5_TURBO]: 10,
  [AvailableModels.GPT3_5_TURBO_16k]: 10,
  [AvailableModels.GPT3_5_TURBO_0301]: 10,
  [AvailableModels.GPT3_5_TURBO_0613]: 10,
  [AvailableModels.GPT3_5_TURBO_16k_0613]: 10,
};
