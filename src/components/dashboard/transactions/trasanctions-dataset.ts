interface TransactionAmount {
  amount: number
  currency: string
}

interface DomainCode {
  code: string
  name: string
}

interface FamilyCode {
  code: string
  name: string
}

interface SubFamilyCode {
  code: string
  name: string
}

interface ProprietaryBankTransactionCode {
  code: 'DEBIT' | 'CREDIT'
  issuer: string
}

interface ISOBankTransactionCode {
  domainCode: DomainCode
  familyCode: FamilyCode
  subFamilyCode: SubFamilyCode
}

interface TransactionHash {
  hash: string
}

interface Enrichment {
  transactionHash: TransactionHash
}

export interface Transaction {
  id: string
  date: string
  bookingDateTime: string
  valueDateTime: string
  status: 'PENDING' | 'BOOKED'
  amount: number
  currency: string
  transactionAmount: TransactionAmount
  reference: string
  description: string
  transactionInformation: string[]
  isoBankTransactionCode: ISOBankTransactionCode
  proprietaryBankTransactionCode: ProprietaryBankTransactionCode
  enrichment: Enrichment
}

export const transactionsDataset: Transaction[] = [{
  "id": "6b586ca757eb01f6e55b4a133c17773c.1",
  "date": "2025-02-11T13:48:59.358Z",
  "bookingDateTime": "2025-02-11T13:48:59.358Z",
  "valueDateTime": "2025-02-11T13:48:59.358Z",
  "status": "PENDING",
  "amount": -31.25,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -31.25, "currency": "EUR"
  },
  "reference": "VIR COMPTE CHARGE",
  "description": "VIR COMPTE CHARGE",
  "transactionInformation": ["VIR COMPTE CHARGE"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "db239e8d45720131f136725f4b55d647.1"
    }
  }
}, {
  "id": "06002202504100003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-10T00:00:00.000Z",
  "bookingDateTime": "2025-02-10T00:00:00.000Z",
  "valueDateTime": "2025-02-10T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -1.8,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -1.8, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 0702 CENON TRIPLE H         CARTE 6924",
  "description": "PAIEMENT MOB 0702 CENON TRIPLE H         CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 0702 CENON", "TRIPLE H         CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "6b94682a0e57835f6c33464417bb1de2.1"
    }
  }
}, {
  "id": "06002202504100002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-10T00:00:00.000Z",
  "bookingDateTime": "2025-02-10T00:00:00.000Z",
  "valueDateTime": "2025-02-10T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 35,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 35, "currency": "EUR"
  },
  "reference": "VIR INST MR CISZEK OU MME CISZEK ANNIV MAMIE",
  "description": "VIR INST MR CISZEK OU MME CISZEK ANNIV MAMIE",
  "transactionInformation": ["VIR INST MR CISZEK OU MME CISZEK", "ANNIV MAMIE"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "e9bbfe848a049202acca5a90782f28c2.1"
    }
  }
}, {
  "id": "06002202504100001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-10T00:00:00.000Z",
  "bookingDateTime": "2025-02-10T00:00:00.000Z",
  "valueDateTime": "2025-02-10T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 1.5,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 1.5, "currency": "EUR"
  },
  "reference": "VIR C.P.A.M. BORDEAUX 250380000123",
  "description": "VIR C.P.A.M. BORDEAUX 250380000123",
  "transactionInformation": ["VIR C.P.A.M. BORDEAUX", "250380000123"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "4714d60a07378540217f13969e8593bd.1"
    }
  }
}, {
  "id": "06002202504200001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-07T00:00:00.000Z",
  "bookingDateTime": "2025-02-11T00:00:00.000Z",
  "valueDateTime": "2025-02-01T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -3.35,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -3.35, "currency": "EUR"
  },
  "reference": " F COTIS EUC JEUNE",
  "description": " F COTIS EUC JEUNE",
  "transactionInformation": [" F COTIS EUC JEUNE"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "bb9d8f5e49369387c72d662ca7bde3c6.1"
    }
  }
}, {
  "id": "06002202503800005-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-07T00:00:00.000Z",
  "bookingDateTime": "2025-02-07T00:00:00.000Z",
  "valueDateTime": "2025-02-07T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -32.84,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -32.84, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 0502 TALENCE E. LECLERC       CARTE 6924",
  "description": "PAIEMENT MOB 0502 TALENCE E. LECLERC       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 0502 TALENCE", "E. LECLERC       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "befb04770b3ffe32bb65369f273afb5b.1"
    }
  }
}, {
  "id": "06002202503800004-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-07T00:00:00.000Z",
  "bookingDateTime": "2025-02-07T00:00:00.000Z",
  "valueDateTime": "2025-02-07T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -57.06,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -57.06, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  0602 BORDE 568045/ ESSO HAUT BRION  CARTE 6924",
  "description": "PAIEMENT CB  0602 BORDE 568045/ ESSO HAUT BRION  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  0602 BORDE 568045/", "ESSO HAUT BRION  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "023f132a5a7707600e7208c2c3192fe1.1"
    }
  }
}, {
  "id": "06002202503800003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-07T00:00:00.000Z",
  "bookingDateTime": "2025-02-07T00:00:00.000Z",
  "valueDateTime": "2025-02-07T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -29.99,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -29.99, "currency": "EUR"
  },
  "reference": "PRLV SEPA FREE TELECOM FHD-1358377742 FREE HAUTDEBIT 1358377742",
  "description": "PRLV SEPA FREE TELECOM FHD-1358377742 FREE HAUTDEBIT 1358377742",
  "transactionInformation": ["PRLV SEPA FREE TELECOM", "FHD-1358377742", "FREE HAUTDEBIT 1358377742"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "a09c9bae81a47b52daf343aee957c1c9.1"
    }
  }
}, {
  "id": "06002202503800002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-07T00:00:00.000Z",
  "bookingDateTime": "2025-02-07T00:00:00.000Z",
  "valueDateTime": "2025-02-07T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -376.68,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -376.68, "currency": "EUR"
  },
  "reference": "PRLV SEPA LAMY BORDX RAV GERANC SIG/76856025/2025-02-07 QUITTANCE 01/02/2025 - MENSUEL",
  "description": "PRLV SEPA LAMY BORDX RAV GERANC SIG/76856025/2025-02-07 QUITTANCE 01/02/2025 - MENSUEL",
  "transactionInformation": ["PRLV SEPA LAMY BORDX RAV GERANC", "SIG/76856025/2025-02-07", "QUITTANCE 01/02/2025 - MENSUEL"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "90560ae3642933278286a27e4fa0cafe.1"
    }
  }
}, {
  "id": "06002202503800001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-07T00:00:00.000Z",
  "bookingDateTime": "2025-02-07T00:00:00.000Z",
  "valueDateTime": "2025-02-07T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -62,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -62, "currency": "EUR"
  },
  "reference": "PRLV SEPA TOTALENERGIES ELECTRI 0111054694-222603287455 PRELEVEMENT TOTALENERGIES ELECTRICI TE ET GAZ FRANCE-REFERENCE CLIENT 1",
  "description": "PRLV SEPA TOTALENERGIES ELECTRI 0111054694-222603287455 PRELEVEMENT TOTALENERGIES ELECTRICI TE ET GAZ FRANCE-REFERENCE CLIENT 1",
  "transactionInformation": ["PRLV SEPA TOTALENERGIES ELECTRI", "0111054694-222603287455", "PRELEVEMENT TOTALENERGIES ELECTRICI", "TE ET GAZ FRANCE-REFERENCE CLIENT 1"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "9c568ac775875a6717f2fdf8b5a937f7.1"
    }
  }
}, {
  "id": "06002202503700003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-06T00:00:00.000Z",
  "bookingDateTime": "2025-02-06T00:00:00.000Z",
  "valueDateTime": "2025-02-06T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 50,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 50, "currency": "EUR"
  },
  "reference": "VIR INST MR CISZEK OU MME CISZEK ANNIVERSAIRE 24 ANS",
  "description": "VIR INST MR CISZEK OU MME CISZEK ANNIVERSAIRE 24 ANS",
  "transactionInformation": ["VIR INST MR CISZEK OU MME CISZEK", "ANNIVERSAIRE 24 ANS"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "12a1ec0cdc1033422c780d0372414de9.1"
    }
  }
}, {
  "id": "06002202503700002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-06T00:00:00.000Z",
  "bookingDateTime": "2025-02-06T00:00:00.000Z",
  "valueDateTime": "2025-02-06T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -74.26,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -74.26, "currency": "EUR"
  },
  "reference": "AUTOMOBILE AA11173818 RMS25035243319704GI",
  "description": "AUTOMOBILE AA11173818 RMS25035243319704GI",
  "transactionInformation": ["AUTOMOBILE AA11173818", "RMS25035243319704GI"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "4e2a4311b5ca9255d8b3188c7af5771a.1"
    }
  }
}, {
  "id": "06002202503700001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-06T00:00:00.000Z",
  "bookingDateTime": "2025-02-06T00:00:00.000Z",
  "valueDateTime": "2025-02-06T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -10.78,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -10.78, "currency": "EUR"
  },
  "reference": "HABITATION BQ8819306 RMS25035012970986GI",
  "description": "HABITATION BQ8819306 RMS25035012970986GI",
  "transactionInformation": ["HABITATION BQ8819306", "RMS25035012970986GI"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "087b609f742267843c884488d4d8b941.1"
    }
  }
}, {
  "id": "06002202503600006-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-05T00:00:00.000Z",
  "bookingDateTime": "2025-02-05T00:00:00.000Z",
  "valueDateTime": "2025-02-05T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -3.3,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -3.3, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  0302 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "description": "PAIEMENT CB  0302 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  0302 BORDEAUX", "TBM-VENTE LIGNE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "9dbc1876aa91fe3fccae22999e10a848.1"
    }
  }
}, {
  "id": "06002202503600005-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-05T00:00:00.000Z",
  "bookingDateTime": "2025-02-05T00:00:00.000Z",
  "valueDateTime": "2025-02-05T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -28.33,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -28.33, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 0302 TALENCE E. LECLERC       CARTE 6924",
  "description": "PAIEMENT MOB 0302 TALENCE E. LECLERC       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 0302 TALENCE", "E. LECLERC       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "923cdb295c51233c3b7a71e826cfb739.1"
    }
  }
}, {
  "id": "06002202503600004-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-05T00:00:00.000Z",
  "bookingDateTime": "2025-02-05T00:00:00.000Z",
  "valueDateTime": "2025-02-05T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -2.48,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -2.48, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 0402 TALENCE SAS KAITE 10     CARTE 6924",
  "description": "PAIEMENT MOB 0402 TALENCE SAS KAITE 10     CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 0402 TALENCE", "SAS KAITE 10     CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "166d23c51a2d5a508be91e4d766933f0.1"
    }
  }
}, {
  "id": "06002202503600003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-05T00:00:00.000Z",
  "bookingDateTime": "2025-02-05T00:00:00.000Z",
  "valueDateTime": "2025-02-05T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -35,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -35, "currency": "EUR"
  },
  "reference": "PAIEMENT PSC 0402 TALENCE BOURGUIGNON      CARTE 6924",
  "description": "PAIEMENT PSC 0402 TALENCE BOURGUIGNON      CARTE 6924",
  "transactionInformation": ["PAIEMENT PSC 0402 TALENCE", "BOURGUIGNON      CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "85a8df92d925c0cccb25b9313b06d430.1"
    }
  }
}, {
  "id": "06002202503600002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-05T00:00:00.000Z",
  "bookingDateTime": "2025-02-05T00:00:00.000Z",
  "valueDateTime": "2025-02-05T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 350,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 350, "currency": "EUR"
  },
  "reference": "VIR MR CISZEK OU MME CISZEK REFERENCE NON TRANSMISE REMB. PRET ETUDE",
  "description": "VIR MR CISZEK OU MME CISZEK REFERENCE NON TRANSMISE REMB. PRET ETUDE",
  "transactionInformation": ["VIR MR CISZEK OU MME CISZEK", "REFERENCE NON TRANSMISE", "REMB. PRET ETUDE"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "0931de12b4781f0496396643c9c58860.1"
    }
  }
}, {
  "id": "06002202503600001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-05T00:00:00.000Z",
  "bookingDateTime": "2025-02-05T00:00:00.000Z",
  "valueDateTime": "2025-02-05T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 80.12,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 80.12, "currency": "EUR"
  },
  "reference": "VIR CAF DE LA GIRONDE 49499045V16 2076907ZCISZEK      012025ME",
  "description": "VIR CAF DE LA GIRONDE 49499045V16 2076907ZCISZEK      012025ME",
  "transactionInformation": ["VIR CAF DE LA GIRONDE", "49499045V16", "2076907ZCISZEK      012025ME"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "0feb30971a93afc811677681c5f43005.1"
    }
  }
}, {
  "id": "06002202503500003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-04T00:00:00.000Z",
  "bookingDateTime": "2025-02-04T00:00:00.000Z",
  "valueDateTime": "2025-02-04T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -10,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -10, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 0302 LALANDE DE PO SOBRE CHARTRONS  CARTE 6924",
  "description": "PAIEMENT MOB 0302 LALANDE DE PO SOBRE CHARTRONS  CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 0302 LALANDE DE PO", "SOBRE CHARTRONS  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "4922f7fdbaf96c1cbba998f07583c6fe.1"
    }
  }
}, {
  "id": "06002202503500002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-03T00:00:00.000Z",
  "bookingDateTime": "2025-02-04T00:00:00.000Z",
  "valueDateTime": "2025-02-03T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -22.41,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -22.41, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 3001 TALENCE E. LECLERC       CARTE 6924",
  "description": "PAIEMENT MOB 3001 TALENCE E. LECLERC       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 3001 TALENCE", "E. LECLERC       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "bd9b7a252b6b65242f16127c07928c22.1"
    }
  }
}, {
  "id": "06002202503500001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-03T00:00:00.000Z",
  "bookingDateTime": "2025-02-04T00:00:00.000Z",
  "valueDateTime": "2025-02-03T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -8.07,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -8.07, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 0102 TALENCE SAS KAITE 10     CARTE 6924",
  "description": "PAIEMENT MOB 0102 TALENCE SAS KAITE 10     CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 0102 TALENCE", "SAS KAITE 10     CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "54db68cf6006bb5eb8648daee993ad75.1"
    }
  }
}, {
  "id": "06002202503400002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-03T00:00:00.000Z",
  "bookingDateTime": "2025-02-03T00:00:00.000Z",
  "valueDateTime": "2025-02-03T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 991.07,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 991.07, "currency": "EUR"
  },
  "reference": "VIR FRANCE TRAVAIL 25029004885 01 333 7022056V 03022025",
  "description": "VIR FRANCE TRAVAIL 25029004885 01 333 7022056V 03022025",
  "transactionInformation": ["VIR FRANCE TRAVAIL", "25029004885", "01 333 7022056V 03022025"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "279943a6c3c15f2c4b9fa31a3ead7ff7.1"
    }
  }
}, {
  "id": "06002202503400001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-02-03T00:00:00.000Z",
  "bookingDateTime": "2025-02-03T00:00:00.000Z",
  "valueDateTime": "2025-02-01T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 300,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 300, "currency": "EUR"
  },
  "reference": "VIR DE M ANTHONY CISZEK",
  "description": "VIR DE M ANTHONY CISZEK",
  "transactionInformation": ["VIR DE M ANTHONY CISZEK"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "6ebc1cc6cf6a2efff42df3e7f6217975.1"
    }
  }
}, {
  "id": "06001202503000001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-30T00:00:00.000Z",
  "bookingDateTime": "2025-01-30T00:00:00.000Z",
  "valueDateTime": "2025-01-16T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 22.41,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 22.41, "currency": "EUR"
  },
  "reference": "VIR DE M ANTHONY CISZEK",
  "description": "VIR DE M ANTHONY CISZEK",
  "transactionInformation": ["VIR DE M ANTHONY CISZEK"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "d762e1cde0473b00b5acb975364ef0f1.1"
    }
  }
}, {
  "id": "06001202502800003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-28T00:00:00.000Z",
  "bookingDateTime": "2025-01-28T00:00:00.000Z",
  "valueDateTime": "2025-01-28T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -10.9,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -10.9, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 2601 LE BOUSCAT CFC LORMONT      CARTE 6924",
  "description": "PAIEMENT MOB 2601 LE BOUSCAT CFC LORMONT      CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 2601 LE BOUSCAT", "CFC LORMONT      CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "44f5027547cef7990d022ac010057f23.1"
    }
  }
}, {
  "id": "06001202502800002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-28T00:00:00.000Z",
  "bookingDateTime": "2025-01-28T00:00:00.000Z",
  "valueDateTime": "2025-01-28T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -3.4,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -3.4, "currency": "EUR"
  },
  "reference": "2  PAIEMENTS 2601 LE BOUSCAT CFC LORMONT      CARTE 6924",
  "description": "2  PAIEMENTS 2601 LE BOUSCAT CFC LORMONT      CARTE 6924",
  "transactionInformation": ["2  PAIEMENTS 2601 LE BOUSCAT", "CFC LORMONT      CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "0bf3c11761e0267105d683ee1d983de1.1"
    }
  }
}, {
  "id": "06001202502800001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-28T00:00:00.000Z",
  "bookingDateTime": "2025-01-28T00:00:00.000Z",
  "valueDateTime": "2025-01-16T00:00:00.000Z",
  "status": "BOOKED",
  "amount": 10,
  "currency": "EUR",
  "transactionAmount": {
    "amount": 10, "currency": "EUR"
  },
  "reference": "VIR DE M ANTHONY CISZEK",
  "description": "VIR DE M ANTHONY CISZEK",
  "transactionInformation": ["VIR DE M ANTHONY CISZEK"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "RCDT", "name": "Received Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "CREDIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "d20f1f6743a45e929c4db4ad131b961b.1"
    }
  }
}, {
  "id": "06001202502700007-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-27T00:00:00.000Z",
  "bookingDateTime": "2025-01-27T00:00:00.000Z",
  "valueDateTime": "2025-01-27T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -8.38,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -8.38, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 2401 BORDEAUX CEDE AUCHAN 0029M     CARTE 6924",
  "description": "PAIEMENT MOB 2401 BORDEAUX CEDE AUCHAN 0029M     CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 2401 BORDEAUX CEDE", "AUCHAN 0029M     CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "e22050d8e858e54af54381530a9cc145.1"
    }
  }
}, {
  "id": "06001202502700006-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-27T00:00:00.000Z",
  "bookingDateTime": "2025-01-27T00:00:00.000Z",
  "valueDateTime": "2025-01-27T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -3.3,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -3.3, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  2401 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "description": "PAIEMENT CB  2401 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  2401 BORDEAUX", "TBM-VENTE LIGNE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "566cbbc17573bcde4c74eabbb32062c2.1"
    }
  }
}, {
  "id": "06001202502700005-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-27T00:00:00.000Z",
  "bookingDateTime": "2025-01-27T00:00:00.000Z",
  "valueDateTime": "2025-01-27T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -3.3,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -3.3, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  2301 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "description": "PAIEMENT CB  2301 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  2301 BORDEAUX", "TBM-VENTE LIGNE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "c0f5af5fc969dae22637f361616f3caf.1"
    }
  }
}, {
  "id": "06001202502700004-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-27T00:00:00.000Z",
  "bookingDateTime": "2025-01-27T00:00:00.000Z",
  "valueDateTime": "2025-01-27T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -13.4,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -13.4, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 2301 CENON TRIPLE H         CARTE 6924",
  "description": "PAIEMENT MOB 2301 CENON TRIPLE H         CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 2301 CENON", "TRIPLE H         CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "019e127b33ed3d7ba1690683a226f9da.1"
    }
  }
}, {
  "id": "06001202502700003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-27T00:00:00.000Z",
  "bookingDateTime": "2025-01-27T00:00:00.000Z",
  "valueDateTime": "2025-01-27T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -20.03,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -20.03, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  2501 BORDE 568045/ ESSO HAUT BRION  CARTE 6924",
  "description": "PAIEMENT CB  2501 BORDE 568045/ ESSO HAUT BRION  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  2501 BORDE 568045/", "ESSO HAUT BRION  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "e4e1f47b5a92143867342c5f1c18a0da.1"
    }
  }
}, {
  "id": "06001202502700002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-27T00:00:00.000Z",
  "bookingDateTime": "2025-01-27T00:00:00.000Z",
  "valueDateTime": "2025-01-27T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -256.67,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -256.67, "currency": "EUR"
  },
  "reference": "PRLV SEPA DIAC FRYY321021948 DC39020573668EDIAC 321021948 DC39020573668EDIAC",
  "description": "PRLV SEPA DIAC FRYY321021948 DC39020573668EDIAC 321021948 DC39020573668EDIAC",
  "transactionInformation": ["PRLV SEPA DIAC", "FRYY321021948 DC39020573668EDIAC", "321021948 DC39020573668EDIAC"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "cc1b8f6556cfb54bb786521f386e4e47.1"
    }
  }
}, {
  "id": "06001202502700001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-27T00:00:00.000Z",
  "bookingDateTime": "2025-01-27T00:00:00.000Z",
  "valueDateTime": "2025-01-27T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -30.99,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -30.99, "currency": "EUR"
  },
  "reference": "PRLV SEPA ORANGE SA 161277891785906348123129174650 VOTRE ABONNEMENT MOBILE: 07XXXXX234  (FACTURE: 1231291746)",
  "description": "PRLV SEPA ORANGE SA 161277891785906348123129174650 VOTRE ABONNEMENT MOBILE: 07XXXXX234  (FACTURE: 1231291746)",
  "transactionInformation": ["PRLV SEPA ORANGE SA", "161277891785906348123129174650", "VOTRE ABONNEMENT MOBILE: 07XXXXX234", " (FACTURE: 1231291746)"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "c770f72b62932d685e1a3d357d6bd320.1"
    }
  }
}, {
  "id": "06001202502400003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-24T00:00:00.000Z",
  "bookingDateTime": "2025-01-24T00:00:00.000Z",
  "valueDateTime": "2025-01-24T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -5.8,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -5.8, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  2201 6,00      USD OBSIDIAN.MD      CARTE 6924",
  "description": "PAIEMENT CB  2201 6,00      USD OBSIDIAN.MD      CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  2201 6,00      USD", "OBSIDIAN.MD      CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "38c54fb5924f0f30cc80e6c143ea7faa.1"
    }
  }
}, {
  "id": "06001202502400002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-24T00:00:00.000Z",
  "bookingDateTime": "2025-01-24T00:00:00.000Z",
  "valueDateTime": "2025-01-24T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -9.64,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -9.64, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 2301 TALENCE SAS KAITE 10     CARTE 6924",
  "description": "PAIEMENT MOB 2301 TALENCE SAS KAITE 10     CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 2301 TALENCE", "SAS KAITE 10     CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "6b18c6f44455b490b882c7ee70b711f4.1"
    }
  }
}, {
  "id": "06001202502400001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-24T00:00:00.000Z",
  "bookingDateTime": "2025-01-24T00:00:00.000Z",
  "valueDateTime": "2025-01-24T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -19.12,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -19.12, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 2201 TALENCE E. LECLERC       CARTE 6924",
  "description": "PAIEMENT MOB 2201 TALENCE E. LECLERC       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 2201 TALENCE", "E. LECLERC       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "dca37cb038ee080f183b01060fcb66ee.1"
    }
  }
}, {
  "id": "06001202502200001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-22T00:00:00.000Z",
  "bookingDateTime": "2025-01-22T00:00:00.000Z",
  "valueDateTime": "2025-01-22T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -11.12,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -11.12, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  2101 STOCKHOLM SPOTIFY P3367A84 CARTE 6924",
  "description": "PAIEMENT CB  2101 STOCKHOLM SPOTIFY P3367A84 CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  2101 STOCKHOLM", "SPOTIFY P3367A84 CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "1ec0d6217cf98b76e6111ac8b6473286.1"
    }
  }
}, {
  "id": "06001202502100002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-21T00:00:00.000Z",
  "bookingDateTime": "2025-01-21T00:00:00.000Z",
  "valueDateTime": "2025-01-21T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -12.3,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -12.3, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1801 TALENCE OTACOS           CARTE 6924",
  "description": "PAIEMENT MOB 1801 TALENCE OTACOS           CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1801 TALENCE", "OTACOS           CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "e3047d17c42d8c17089bdbcb3fca7c76.1"
    }
  }
}, {
  "id": "06001202502100001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-21T00:00:00.000Z",
  "bookingDateTime": "2025-01-21T00:00:00.000Z",
  "valueDateTime": "2025-01-21T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -10.49,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -10.49, "currency": "EUR"
  },
  "reference": "2  PAIEMENTS 1901 BORDEAUX CARREFOUR EXPRE  CARTE 6924",
  "description": "2  PAIEMENTS 1901 BORDEAUX CARREFOUR EXPRE  CARTE 6924",
  "transactionInformation": ["2  PAIEMENTS 1901 BORDEAUX", "CARREFOUR EXPRE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "db279b0ee8bd4b50550ba32b4c730bcc.1"
    }
  }
}, {
  "id": "06001202502000002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-20T00:00:00.000Z",
  "bookingDateTime": "2025-01-20T00:00:00.000Z",
  "valueDateTime": "2025-01-20T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -10.03,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -10.03, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1601 TALENCE E. LECLERC       CARTE 6924",
  "description": "PAIEMENT MOB 1601 TALENCE E. LECLERC       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1601 TALENCE", "E. LECLERC       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "5fbd36a0fb418ed6a7ac551bfe2e4700.1"
    }
  }
}, {
  "id": "06001202502000001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-20T00:00:00.000Z",
  "bookingDateTime": "2025-01-20T00:00:00.000Z",
  "valueDateTime": "2025-01-20T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -7.16,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -7.16, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1701 TALENCE E. LECLERC       CARTE 6924",
  "description": "PAIEMENT MOB 1701 TALENCE E. LECLERC       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1701 TALENCE", "E. LECLERC       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "bc6f003316420f2837952fef7cfd0f8a.1"
    }
  }
}, {
  "id": "06001202501700003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-17T00:00:00.000Z",
  "bookingDateTime": "2025-01-17T00:00:00.000Z",
  "valueDateTime": "2025-01-17T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -2.5,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -2.5, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1501 BORDEAUX MONOP' BORDEAUX  CARTE 6924",
  "description": "PAIEMENT MOB 1501 BORDEAUX MONOP' BORDEAUX  CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1501 BORDEAUX", "MONOP' BORDEAUX  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "725e032570f0a06d3a85de67a9e74d67.1"
    }
  }
}, {
  "id": "06001202501700002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-17T00:00:00.000Z",
  "bookingDateTime": "2025-01-17T00:00:00.000Z",
  "valueDateTime": "2025-01-17T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -18.3,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -18.3, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1601 TALENCE REY ' MAX        CARTE 6924",
  "description": "PAIEMENT MOB 1601 TALENCE REY ' MAX        CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1601 TALENCE", "REY ' MAX        CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "13e7e4de94992eb1c72efb966e09d10f.1"
    }
  }
}, {
  "id": "06001202501700001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-17T00:00:00.000Z",
  "bookingDateTime": "2025-01-17T00:00:00.000Z",
  "valueDateTime": "2025-01-17T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -7.61,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -7.61, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1501 BORDEAUX CARREFOUR EXPRE  CARTE 6924",
  "description": "PAIEMENT MOB 1501 BORDEAUX CARREFOUR EXPRE  CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1501 BORDEAUX", "CARREFOUR EXPRE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "8b142190d397fd08d486866e4881f73e.1"
    }
  }
}, {
  "id": "06001202501600002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-16T00:00:00.000Z",
  "bookingDateTime": "2025-01-16T00:00:00.000Z",
  "valueDateTime": "2025-01-16T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -23.52,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -23.52, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  1501 24,00     USD OPENAI *CHATGPT  CARTE 6924",
  "description": "PAIEMENT CB  1501 24,00     USD OPENAI *CHATGPT  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  1501 24,00     USD", "OPENAI *CHATGPT  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "8ba8b7986b8975f8a21a92db04a8028f.1"
    }
  }
}, {
  "id": "06001202501600001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-16T00:00:00.000Z",
  "bookingDateTime": "2025-01-16T00:00:00.000Z",
  "valueDateTime": "2025-01-15T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -349.38,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -349.38, "currency": "EUR"
  },
  "reference": "ECH PRET CAP+IN 03057 202217 05",
  "description": "ECH PRET CAP+IN 03057 202217 05",
  "transactionInformation": ["ECH PRET CAP+IN 03057 202217 05"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "b6ef61a1093c0af38be93c8a7e03c1d4.1"
    }
  }
}, {
  "id": "06001202501500003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-15T00:00:00.000Z",
  "bookingDateTime": "2025-01-15T00:00:00.000Z",
  "valueDateTime": "2025-01-15T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -3.3,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -3.3, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  1301 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "description": "PAIEMENT CB  1301 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  1301 BORDEAUX", "TBM-VENTE LIGNE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "b988167b319d8882488ef76de85ea696.1"
    }
  }
}, {
  "id": "06001202501500002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-15T00:00:00.000Z",
  "bookingDateTime": "2025-01-15T00:00:00.000Z",
  "valueDateTime": "2025-01-15T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -10,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -10, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1401 TALENCE REY ' MAX        CARTE 6924",
  "description": "PAIEMENT MOB 1401 TALENCE REY ' MAX        CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1401 TALENCE", "REY ' MAX        CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "07e3aac00e460334680128030fd98644.1"
    }
  }
}, {
  "id": "06001202501500001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-15T00:00:00.000Z",
  "bookingDateTime": "2025-01-15T00:00:00.000Z",
  "valueDateTime": "2025-01-16T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -31.25,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -31.25, "currency": "EUR"
  },
  "reference": "VIR COMPTE CHARGE CG3V25015L023291",
  "description": "VIR COMPTE CHARGE CG3V25015L023291",
  "transactionInformation": ["VIR COMPTE CHARGE", "CG3V25015L023291"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "80c8f5a609d05ed8b37a6295f2f7a58c.1"
    }
  }
}, {
  "id": "06001202501400012-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-14T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-14T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -6.9,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -6.9, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  1301 31 TISSEO APPLIS TISSEO    CARTE 6924",
  "description": "PAIEMENT CB  1301 31 TISSEO APPLIS TISSEO    CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  1301 31 TISSEO", "APPLIS TISSEO    CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "012aa4b9753b0fc8f945dc390778c546.1"
    }
  }
}, {
  "id": "06001202501400011-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-14T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-14T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -9.9,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -9.9, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1301 BLAGNAC AEROSCOPIA       CARTE 6924",
  "description": "PAIEMENT MOB 1301 BLAGNAC AEROSCOPIA       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1301 BLAGNAC", "AEROSCOPIA       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "569cea28f8c1a5f6641d2fb135a4b777.1"
    }
  }
}, {
  "id": "06001202501400010-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-14T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-14T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -3.2,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -3.2, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1201 BORDEAUX MONOP' BORDEAUX  CARTE 6924",
  "description": "PAIEMENT MOB 1201 BORDEAUX MONOP' BORDEAUX  CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1201 BORDEAUX", "MONOP' BORDEAUX  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "dab4be3f3894bd9f0d7d58e8d63872c7.1"
    }
  }
}, {
  "id": "06001202501400009-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-14T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-14T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -12,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -12, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1301 BLAGNAC TAXIWAY AIRBUS   CARTE 6924",
  "description": "PAIEMENT MOB 1301 BLAGNAC TAXIWAY AIRBUS   CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1301 BLAGNAC", "TAXIWAY AIRBUS   CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "fa28a85fc2bfdbb839655b5f39ba744e.1"
    }
  }
}, {
  "id": "06001202501400008-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-14T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-14T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -13.5,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -13.5, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1201 BORDEAUX BOR-BURGER       CARTE 6924",
  "description": "PAIEMENT MOB 1201 BORDEAUX BOR-BURGER       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1201 BORDEAUX", "BOR-BURGER       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "9f5f5ac674ac3ed26fe97ca682c7a10d.1"
    }
  }
}, {
  "id": "06001202501400007-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-14T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-14T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -9.89,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -9.89, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1301 TOULOUSE CARREFOUR CITY   CARTE 6924",
  "description": "PAIEMENT MOB 1301 TOULOUSE CARREFOUR CITY   CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1301 TOULOUSE", "CARREFOUR CITY   CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "20f909517d53b598ef46cba730e5c966.1"
    }
  }
}, {
  "id": "06001202501400006-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-13T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-13T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -16.36,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -16.36, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 0901 TALENCE E. LECLERC       CARTE 6924",
  "description": "PAIEMENT MOB 0901 TALENCE E. LECLERC       CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 0901 TALENCE", "E. LECLERC       CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "27c0b7de2e3e382802c26b16dcdfd441.1"
    }
  }
}, {
  "id": "06001202501400005-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-13T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-13T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -6,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -6, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1101 LORMONT SUMUP  *FAMILLE  CARTE 6924",
  "description": "PAIEMENT MOB 1101 LORMONT SUMUP  *FAMILLE  CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1101 LORMONT", "SUMUP  *FAMILLE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "bb080e2f6f8ad4c9594b4230cfdf5895.1"
    }
  }
}, {
  "id": "06001202501400004-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-13T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-13T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -3.3,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -3.3, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  1201 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "description": "PAIEMENT CB  1201 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  1201 BORDEAUX", "TBM-VENTE LIGNE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "1d74a37d42efb018265744078c1fd58e.1"
    }
  }
}, {
  "id": "06001202501400003-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-13T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-13T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -1.9,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -1.9, "currency": "EUR"
  },
  "reference": "PAIEMENT CB  1001 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "description": "PAIEMENT CB  1001 BORDEAUX TBM-VENTE LIGNE  CARTE 6924",
  "transactionInformation": ["PAIEMENT CB  1001 BORDEAUX", "TBM-VENTE LIGNE  CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "d6cdfeab03eff39904d1dae7a1f2f4d2.1"
    }
  }
}, {
  "id": "06001202501400002-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-13T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-13T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -14.9,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -14.9, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1201 TALENCE AUCHAN 1137M     CARTE 6924",
  "description": "PAIEMENT MOB 1201 TALENCE AUCHAN 1137M     CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1201 TALENCE", "AUCHAN 1137M     CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "6be2033b8166b3c4886af8c2b0ab7584.1"
    }
  }
}, {
  "id": "06001202501400001-716d0ecb74ae4bbbff80e36815f0016cd9f0bea1f09fa1d5a89434ea4b7f0d37",
  "date": "2025-01-13T00:00:00.000Z",
  "bookingDateTime": "2025-01-14T00:00:00.000Z",
  "valueDateTime": "2025-01-13T00:00:00.000Z",
  "status": "BOOKED",
  "amount": -1.84,
  "currency": "EUR",
  "transactionAmount": {
    "amount": -1.84, "currency": "EUR"
  },
  "reference": "PAIEMENT MOB 1201 TALENCE AUCHAN 1137M     CARTE 6924",
  "description": "PAIEMENT MOB 1201 TALENCE AUCHAN 1137M     CARTE 6924",
  "transactionInformation": ["PAIEMENT MOB 1201 TALENCE", "AUCHAN 1137M     CARTE 6924"],
  "isoBankTransactionCode": {
    "domainCode": {
      "code": "PMNT", "name": "Payments"
    }, "familyCode": {
      "code": "ICDT", "name": "Issued Credit Transfers"
    }, "subFamilyCode": {
      "code": "DMCT", "name": "Domestic Credit Transfer"
    }
  },
  "proprietaryBankTransactionCode": {
    "code": "DEBIT", "issuer": "creditmutuel"
  },
  "enrichment": {
    "transactionHash": {
      "hash": "0285b228b954d62f3df63dd85f646c92.1"
    }
  }
}]
