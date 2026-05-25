import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — CaterCore",
  description:
    "How CaterCore collects, uses, and protects the data of its customers and end users.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="May 22, 2026"
      intro="This Privacy Policy explains how CaterCore (“we”, “us”) collects, uses, and protects personal information when you use our software, websites, and related services."
      sections={[
        {
          heading: "1. Information we collect",
          body: (
            <>
              <p>
                We collect three categories of information: (i) account information
                you provide when signing up, (ii) Customer Data you upload while
                using the Services, and (iii) usage information collected
                automatically (such as IP address, device identifiers, and
                interactions with the product).
              </p>
            </>
          ),
        },
        {
          heading: "2. How we use information",
          body: (
            <>
              <p>
                Information is used to deliver the Services, improve product
                quality, communicate with you about your account, and comply with
                legal obligations. We never sell personal information.
              </p>
            </>
          ),
        },
        {
          heading: "3. Sharing of information",
          body: (
            <>
              <p>
                We share information only with sub-processors needed to operate the
                Services (hosting, payments, email delivery), with your authorized
                team members, and when required by law. A full list of
                sub-processors is available on request.
              </p>
            </>
          ),
        },
        {
          heading: "4. Data security",
          body: (
            <>
              <p>
                We maintain administrative, technical, and physical safeguards to
                protect personal information. CaterCore is SOC 2 Type II audited.
                All data is encrypted in transit (TLS 1.2+) and at rest (AES-256).
              </p>
            </>
          ),
        },
        {
          heading: "5. Data retention",
          body: (
            <>
              <p>
                Customer Data is retained for the duration of your subscription and
                for 30 days after termination to allow for export. Backups are
                purged within 90 days. Aggregated, de-identified analytics may be
                retained indefinitely.
              </p>
            </>
          ),
        },
        {
          heading: "6. Your rights",
          body: (
            <>
              <p>
                Depending on your jurisdiction, you may have the right to access,
                correct, export, or delete your personal information. Requests can
                be made from your account settings or by contacting our team
                directly.
              </p>
            </>
          ),
        },
        {
          heading: "7. International transfers",
          body: (
            <>
              <p>
                CaterCore is operated from the United States. Where we transfer
                personal data internationally, we rely on Standard Contractual
                Clauses and other safeguards approved by applicable regulators.
              </p>
            </>
          ),
        },
        {
          heading: "8. Children",
          body: (
            <>
              <p>
                The Services are not directed to children under 16. We do not
                knowingly collect personal information from children.
              </p>
            </>
          ),
        },
        {
          heading: "9. Changes to this policy",
          body: (
            <>
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be communicated to affected users in advance.
              </p>
            </>
          ),
        },
        {
          heading: "10. Contact",
          body: (
            <>
              <p>
                Privacy-related questions can be sent to{" "}
                <a href="mailto:privacy@catercore.com" className="text-ember-200 hover:text-ember-100 underline-offset-4 hover:underline">
                  privacy@catercore.com
                </a>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
