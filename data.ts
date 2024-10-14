import { Case, CasePriority, CaseStatus } from "./src/defs/case";
import { Communication, CommunicationType } from "./src/defs/communication";
import { Customer } from "./src/defs/customer";
import { DebtType } from "./src/defs/debt";
import { Institution } from "./src/defs/institution";
import { Payment, PaymentMethod, PaymentStatus } from "./src/defs/payment";
import { Workflow } from "./src/defs/workflow";

export const payments: Payment[] = [
  {
    id: "670c45f5f5d2717df811afe9",
    caseId: "670c45f5f5d2717df811afe9",
    debtId: "670c45f5f5d2717df811afe9",
    amount: 1000,
    method: PaymentMethod.CREDIT_CARD,
    status: PaymentStatus.PAID,
    createdAt: new Date(),
    paymentAt: new Date(),
  },
];

export const communications: Communication[] = [
  {
    id: "670c45f5f5d2717df811afe9",
    caseId: "670c45f5f5d2717df811afe9",
    content: "Communication 1",
    type: CommunicationType.PHONE,
    sendDate: new Date(),
    customerId: "670c45f5f5d2717df811afe9",
  },
  {
    id: "670c45f5f5d2717df811afe8",
    caseId: "670c45f5f5d2717df811afe9",
    content: "Communication 2",
    type: CommunicationType.EMAIL,
    sendDate: new Date(),
    customerId: "670c45f5f5d2717df811afe9",
  },
];

export const institutions = [
  {
    id: "670c45f5f5d2717df811afe9",
    name: "Nubank",
    contact: [
      {
        id: "670c45f5f5d2717df811afe8",
        description: "SAC",
        address: "Av. Brigadeiro Faria Lima, 2000",
        phone: "0800-777-9086",
        email: "sQnI8@example.com",
      },
    ],
    compliances: ["GDPR", "CCPA"],
  },
  {
    id: "670c45f5f5d2717df811afe8",
    name: "Itau",
    contact: [
      {
        id: "670c45f5f5d2717df811afe8",
        description: "SAC",
        address: "Av. Brigadeiro Faria Lima, 2000",
        phone: "0800-777-9086",
        email: "sQnI8@example.com",
      },
    ],
    compliances: ["GDPR", "CCPA"],
  },
] as Institution[];

export const customers = [
  {
    id: "670c45f5f5d2717df811afe9",
    institution: {
      id: "670c45f5f5d2717df811afe9",
      name: "Nubank",
      contact: [
        {
          id: "670c45f5f5d2717df811afe8",
          description: "SAC",
          address: "Av. Brigadeiro Faria Lima, 2000",
          phone: "0800-777-9086",
          email: "sQnI8@example.com",
        },
      ],
      compliances: ["GDPR", "CCPA"],
    },
    name: "John Doe",
    type: "Individual",
    dateOfBirth: new Date("1990-01-01"),
    contact: [
      {
        id: "670c45f5f5d2717df811afe8",
        description: "Pessoal",
        address: "Av. Brigadeiro Faria Lima, 2000",
        phone: "0800-777-9086",
        email: "sQnI8@example.com",
      },
    ],
    creditScore: "Good",
    riskProfile: ["Low", "Medium"],
  },
] as Customer[];

export const cases: Case[] = [
  {
    id: "670c45f5f5d2717df811afe9",
    customer: customers[0],
    institution: institutions[0],
    status: CaseStatus.OPEN,
    priority: CasePriority.MEDIUM,
    createdAt: new Date(),
    closedAt: new Date(),
    assignedAgent: "John Doe",
    payments: payments,
    communications: communications,
    debts: [
      {
        id: "670c45f5f5d2717df811afe9",
        customer: customers[0],
        institution: institutions[0],
        originalAmount: 1000,
        debtType: DebtType.LOAN,
        outstandingAmount: 1000,
        payments: payments,
      },
    ],
  },
];

export const workflows: Workflow[] = [
  {
    id: "670c45f5f5d2717df811afe9",
    name: "Workflow 1",
    stages: "Stage 1, Stage 2",
    activeCases: 1,
    institution: institutions[0],
  },
  {
    id: "670c45f5f5d2717df811afe8",
    name: "Workflow 2",
    stages: "Stage 1, Stage 2",
    activeCases: 0,
    institution: institutions[0],
  },
];
