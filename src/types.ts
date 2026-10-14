export interface DonationTier {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  amount: string;
  families: string;
  tags: string[];
  image: string;
  description: string;
  basketContents: string[];
}

export interface BankAccountDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  sortCode?: string;
  reference: string;
}
