import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — CaterCore",
  description:
    "The terms governing your use of CaterCore's catering operations platform.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="May 22, 2026"
      intro="These Terms of Service (“Terms”) govern your access to and use of CaterCore’s software, websites, and related services (the “Services”). By creating an account or using the Services, you agree to be bound by these Terms."
      sections={[
        {
          heading: "1. Acceptance of terms",
          body: (
            <>
              <p>
                By signing up for an account or using the Services in any way, you
                accept these Terms in full. If you are using the Services on behalf
                of a company or other entity, you represent that you have authority
                to bind that entity to these Terms.
              </p>
            </>
          ),
        },
        {
          heading: "2. Your account",
          body: (
            <>
              <p>
                You are responsible for the activity that occurs under your account,
                for maintaining the security of your credentials, and for promptly
                notifying us of any unauthorized use you become aware of.
              </p>
            </>
          ),
        },
        {
          heading: "3. Acceptable use",
          body: (
            <>
              <p>
                You agree not to misuse the Services. This includes, but is not
                limited to: reverse-engineering the platform, attempting to gain
                unauthorized access, transmitting malware, or using the Services to
                infringe the rights of others.
              </p>
            </>
          ),
        },
        {
          heading: "4. Subscription, billing, and refunds",
          body: (
            <>
              <p>
                Paid plans are billed in advance on a monthly or annual basis. Fees
                are non-refundable except where required by applicable law. You may
                cancel your subscription at any time from your billing settings.
              </p>
            </>
          ),
        },
        {
          heading: "5. Your data",
          body: (
            <>
              <p>
                You retain all rights to the data you submit to the Services
                (“Customer Data”). You grant us a limited license to host and
                process Customer Data solely to provide the Services to you. Our
                handling of personal data is described in the{" "}
                <a href="/privacy" className="text-ember-200 hover:text-ember-100 underline-offset-4 hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </>
          ),
        },
        {
          heading: "6. Service availability",
          body: (
            <>
              <p>
                We work hard to keep the Services available, but we do not warrant
                that the Services will be uninterrupted or error-free. Planned
                maintenance windows are communicated in advance.
              </p>
            </>
          ),
        },
        {
          heading: "7. Termination",
          body: (
            <>
              <p>
                Either party may terminate this agreement at any time, for any
                reason. Upon termination, your right to use the Services ends
                immediately. You can export your Customer Data for 30 days after
                termination.
              </p>
            </>
          ),
        },
        {
          heading: "8. Disclaimers and liability",
          body: (
            <>
              <p>
                The Services are provided “as is” without warranties of any kind.
                To the maximum extent permitted by law, CaterCore’s aggregate
                liability arising out of these Terms is limited to the amounts you
                paid for the Services in the 12 months preceding the claim.
              </p>
            </>
          ),
        },
        {
          heading: "9. Changes to these terms",
          body: (
            <>
              <p>
                We may update these Terms from time to time. Material changes will
                be communicated at least 30 days in advance. Continued use of the
                Services after the effective date constitutes acceptance of the
                updated Terms.
              </p>
            </>
          ),
        },
        {
          heading: "10. Contact",
          body: (
            <>
              <p>
                Questions about these Terms can be sent to{" "}
                <a href="mailto:legal@catercore.com" className="text-ember-200 hover:text-ember-100 underline-offset-4 hover:underline">
                  legal@catercore.com
                </a>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
