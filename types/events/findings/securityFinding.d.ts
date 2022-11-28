import {
  OCSFAttack,
  OCSFComplianceDetails,
  OCSFEnrichment,
  OCSFFindingDetails,
  OCSFMalware,
  OCSFMetadata,
  OCSFObservable,
  OCSFProcess,
  OCSFResource,
  OCSFVulnerabilityDetails,
} from "@objects/index";

export type OCSFSecurityFinding = {
  activity_name?: string; // Optional
  activity_id: number; // Required
  attacks?: OCSFAttack[]; // Optional
  category_name?: string; // Optional
  category_uid: number; // Required
  class_name?: string; // Optional
  class_uid: number; // Required
  compliance?: OCSFComplianceDetails; // Optional
  confidence?: number; // Optional
  count?: number; // Optional
  data?: object; // Optional
  duration?: number; // Optional
  end_time?: number; // Optional
  enrichments?: OCSFEnrichment[]; // Optional
  time: number; // Required
  finding: OCSFFindingDetails; // Required
  malware?: OCSFMalware[]; // Optional
  message?: string; // Recommended
  metadata: OCSFMetadata; // Required
  observables?: OCSFObservable[]; // Optional
  process?: OCSFProcess; // Optional
  raw_data?: string; // Optional
  resources?: OCSFResource[]; // Recommended
  severity?: string; // Optional
  severity_id: number; // Required
  start_time?: number; // Optional
  state?: string; // Optional
  state_id: number; // Required
  status?: string; // Optional
  status_code?: string; // Optional
  status_detail?: string; // Optional
  status_id?: number; // Recommended
  timezone_offset?: number; // Recommended
  type_uid: number; // Required
  type_name?: string; // Optional
  unmapped?: object; // Optional
  vulnerabilities?: OCSFVulnerabilityDetails[]; // Optional
};
