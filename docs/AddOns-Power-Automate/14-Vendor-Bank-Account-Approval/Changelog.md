---
sidebar_position: 2
sidebar_class_name: 'nav-det-level'
---

# Change Log
All notable changes to this project will be documented in this file.
 
## [2.0.0.1] - 2024-09-19
  
Available version: 24.0+

### Changes
- Final refactoring to follow changes in v24 suggested by LinterCop.
- New field **lastModifiedDateTime** in **vendorBankAccounts** API.
- Added support for Power Automate Approval implementation using BCFlowId logic instead of the LastEntryNo. For more details, see the documentation for A07 Pack for Power Automate.

### Obsoleted Functionality (won't be removed but should not be used for new implementations)
- A new Business event **FS5A14VendorBankAccountApprovalRequestedWithFlowId** for BCFlowID process was added and should be used instead of the old **FS5A14VendorBankAccountApprovalRequested**.

## [1.2.0] - 2024-06-28
  
Available version: 23.0+

### Changes
- New event OnCanUnblockVendorForPayments where other apps can indicate, whether the Blocked field can be set to blank.
- New procedures
  - procedure BlockUnblockVendorForPayments(VendorNo: Code[20]; var SourceRecordRef: RecordRef)
  - procedure BlockVendorForPayments(var Vendor: Record "Vendor"): Boolean
  - procedure UnblockVendorForPayments(var Vendor: Record Vendor): Boolean
  - procedure CanUnblockVendorForPayments(VendorNo: Code[20]; var SourceRecordRef: RecordRef): Boolean

## [1.1.0.1] - 2024-03-12
  
Available version: 23.0+

### Changes
- Added support for **Record Limits** and **Tracked Fields** (see [Pack for Power Automate](../07-Pack-for-Power-Automate/Functionality.md) for more details).
  - When the flow is enabled, all flow is active for all records.
  - When the flow is enabled, the following fields are tracked:
    - SWIFT Code
    - IBAN
    - Bank Account No.
    - Bank Branch No.
    - BSB (if exists, AU/NZ localization only)
- The action to send the Vendor Bank Account for approval is visible only if the record is within records with the enabled flow.
- The Approval Status is blank if the record is not within records with the enabled flow.

## [1.0.0] - 2024-02-04
  
Available version: 23.0+

First App-Source version based on our legacy Pack for Power Automate
