export type OCSFAttack = {
  tactics: OCSFTactic[]; // Required
  technique: OCSFTechnique; // Required
  version: string; // Required
};

export type OCSFTactic = {
  name?: string; // Optional
  uid: string; // Required
};

export type OCSFTechnique = {
  name?: string; // Optional
  uid: string; // Required
};

export type OCSFComplianceDetails = {
  requirements?: string[]; // Optional
  status?: string; // Optional
  status_detail?: string; // Optional
};

export type OCSFDigitalSignature = {
  company_name: string; // Required
  created_time?: number; // Optional
  developer_uid?: string; // Optional
  fingerprints?: OCSFFingerprint[]; // Optional
  issuer_name?: string; // Optional
  serial_number?: string; // Optional
};

export type OCSFEnrichment = {
  data: object; // Required
  name: string; // Required
  provider?: string; // Recommended
  type?: string; // Recommended
  value: string; // Required
};

export type OCSFFile = {
  accessed_time?: number; // Optional
  accessor?: string; // Optional
  attributes?: number; // Optional
  company_name?: string; // Optional
  confidentiality?: string; // Optional
  confidentiality_id?: number; // Optional
  created_time?: number; // Optional
  creator?: string; // Optional
  desc?: string; // Optional
  signature?: OCSFDigitalSignature; // Optional
  xattributes?: object; // Optional
  fingerprints?: OCSFFingerprint[]; // Recommended
  mime_type?: string; // Optional
  modified_time?: number; // Optional
  modifier?: string; // Optional
  name: string; // Required
  owner?: string; // Optional
  parent_folder?: string; // Optional
  path?: string; // Optional
  product?: OCSFProduct; // Optional
  security_descriptor?: string; // Optional
  size?: number; // Optional
  is_system?: boolean; // Optional
  type?: string; // Optional
  type_id: number; // Required
  uid?: string; // Optional
  version?: string; // Optional
};

export type OCSFFindingDetails = {
  created_time?: number; // Optional
  desc?: string; // Optional
  first_seen_time?: number; // Optional
  last_seen_time?: number; // Optional
  modified_time?: number; // Optional
  product_uid?: string; // Optional
  related_findings?: OCSFRelatedFindings[]; // Optional
  remediation?: OCSFRemediation; // Optional
  src_url?: string; // Optional
  supporting_data?: object[]; // Optional
  title: string; // Required
  types?: string[]; // Optional
  uid: string; // Required
};

export type OCSFFingerprint = {
  algorithm?: string; // Optional
  algorithm_id: number; // Required
  value: string; // Required
};

export type OCSFRelatedFindings = {
  product_uid?: string; // Optional
  uid: string; // Required
};

export type OCSFRemediation = {
  desc?: string; // Optional
  kb_articles?: string[]; // Recommended
};

export type OCSFMalware = {
  cves?: OCSFCVE[]; // Optional
  classification_ids: number[]; // Required
  classifications?: string[]; // Optional
  name: string; // Required
  path?: string; // Recommended
  provider?: string; // Recommended
  uid?: string; // Recommended
};

export type OCSFCVE = {
  uid: string; // Required
  cvss?: OCSFCVSSScore; // Recommended
  cwe_uid?: string; // Optional
  cwe_url?: string; // Optional
  product?: OCSFProduct; // Optional
  created_time?: number; // Recommended
  modified_time?: number; // Optional
  type?: string; // Recommended
};

export type OCSFCVSSScore = {
  base_score: number; // Required
  depth?: string; // Recommended
  metrics: OCSFMetric[]; // Required
  overall_score?: number; // Recommended
  severity?: string; // Optional
  vector_string?: string; // Optional
  version: string; // Required
};

export type OCSFMetric = {
  name: string; // Required
  value: string; // Required
};

export type OCSFMetadata = {
  correlation_uid?: string; // Optional
  uid?: string; // Optional
  labels?: string[]; // Optional
  logged_time?: number; // Optional
  modified_time?: number; // Optional
  original_time?: string; // Recommended
  processed_time?: string; // Optional
  product: OCSFProduct; // Required
  profiles?: string[]; // Optional
  sequence?: number; // Optional
  version: string; // Required
};

export type OCSFObservable = {
  name: string; // Required
  type?: string; // Optional
  type_id: number; // Required
  value?: string; // Optional
};

export type OCSFProcess = {
  cmd_line?: string; // Recommended
  created_time?: number; // Recommended
  xattributes?: object; // Optional
  file?: OCSFFile; // Recommended
  integrity?: string; // Optional
  integrity_id?: number; // Optional
  lineage?: string[]; // Optional
  loaded_modules?: string[]; // Optional
  name?: string; // Recommended
  parent_process?: OCSFProcess; // Recommended
  pid?: number; // Recommended
  uid?: string; // Recommended
  user?: OCSFUser; // Recommended
  sandbox?: string; // Optional
  terminated_time?: number; // Optional
  tid?: number; // Optional
};

export type OCSFUser = {
  account_type?: string; // Optional
  account_type_id?: number; // Optional
  account_uid?: string; // Optional
  domain?: string; // Optional
  email_addr?: string; // Optional
  groups?: OCSFGroup[]; // Optional
  name?: string; // Recommended
  org_uid?: string; // Optional
  session_uid?: string; // Optional
  session_uuid?: string; // Optional
  type?: string; // Optional
  type_id?: number; // Optional
  uuid?: string; // Optional
  credential_uid?: string; // Optional
  uid?: string; // Recommended
};

export type OCSFGroup = {
  type?: string; // Optional
  desc?: string; // Optional
  name: string; // Required
  privileges?: string[]; // Optional
  uid?: string; // Recommended
};

export type OCSFProduct = {
  feature?: OCSFFeature; // Optional
  lang?: string; // Recommended
  uid?: string; // Recommended
  name: string; // Required
  path?: string; // Optional
  version?: string; // Recommended
  vendor_name: string; // Required
};

export type OCSFFeature = {
  uid?: string; // Recommended
  name?: string; // Recommended
  version?: string; // Recommended
};

export type OCSFResource = {
  account_uid?: string; // Optional
  cloud_partition?: string; // Optional
  criticality?: string; // Optional
  details?: string; // Optional
  group_name?: string; // Recommended
  labels?: string[]; // Optional
  name?: string; // Recommended
  owner?: string; // Recommended
  region?: string; // Optional
  type?: string; // Optional
  uid?: string; // Recommended
};

export type OCSFVulnerabilityDetails = {
  cve: OCSFCVE; // Required
  desc?: string; // Optional
  kb_articles?: string[]; // Optional
  references?: string[]; // Recommended
  packages?: string[]; // Optional
  related_vulnerabilities?: string[]; // Recommended
  severity?: string; // Optional
  title?: string; // Optional
  vendor_name?: string; // Optional
};
