import React from "react";
import termsOfUse from "/terms.png";

export default function TermsConditions() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen mb-10 text-lg">
      <div className="w-full flex flex-col gap-y-2 lg:gap-y-3 mx-auto p-3 lg:py-10">
        <h1 className="text-2xl lg:text-4xl font-extrabold">Terms of Use</h1>
        <h2 className="text-xl font-bold mt-4">Terms:</h2>
        <p>
          By accessing the Starlight Blog Site, you are agreeing to be bound by
          these Terms of Use, all applicable laws and regulations, and agree
          that you are responsible for compliance with any applicable local
          laws. If you do not agree with any of these terms, you should not
          proceed into using or accessing this site.
        </p>

        <h2 className="text-xl font-bold mt-4">Age Limitation:</h2>
        <p>
          Materials contained on this site are of religious nature based on the
          Christian faith and is deemed appropriate and suitable for all groups
          and ages. Children of other faiths however, should seek clearance from
          parents, or guardians before accessing the site.
        </p>

        <h2 className="text-xl font-bold mt-4">Use License:</h2>
        <p>
          Permission is granted to download copies of any downloadable materials
          on the website for personal use, distribution to others for
          non-commercial purposes only. This is the grant of a license, not a
          transfer of title, and under this license you may not:
          <ul className="flex flex-col gap-y-2 list-disc list-inside -indent-6 pl-6">
            <li>modify the materials but distribute as is;</li>
            <li>use the materials for any commercial purposes;</li>
            <li>
              remove any copyright or other proprietary notations from the
              materials.
            </li>
          </ul>
        </p>

        <h2 className="text-xl font-bold mt-4">Disclaimer:</h2>
        <p>
          The materials on the Starlight Blog website are provided 'as is'. The
          Starlight Team makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties, including without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </p>

        <h2 className="text-xl font-bold mt-4">Limitations:</h2>
        <p>
          All users accessing the site have voluntarily made the choice to use.
          In no event shall the Starlight Team be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on the website, even if the Starlight Team or an
          authorized member of the Team has been notified orally or in writing
          of the possibility of such damage.
        </p>

        <h2 className="text-xl font-bold mt-4">Revisions and Errata:</h2>
        <p>
          The Starlight Team will do its utmost best, however materials
          appearing on the website may include technical, typographical, or
          photographic errors. The Starlight Team does not warrant that any of
          the materials on its web site are accurate, complete, or current. The
          Team may make changes to the materials contained on its web site at
          any time without notice. The Starlight Team does not, however, make
          any commitment to update the materials.
        </p>

        <h2 className="text-xl font-bold mt-4">Links:</h2>
        <p>
          We have not reviewed all of the sites linked to our website and thus
          not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by the Starlight Team
          of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2 className="text-xl font-bold mt-4">
          Site Terms of Use Modifications:
        </h2>
        <p>
          Starlight Team may revise these Terms of Use for its website at any
          time without prior notice. By using this website you are agreeing to
          be bound by the then current version of these Terms of Use.
        </p>

        <h2 className="text-xl font-bold mt-4">Governing Law:</h2>
        <p>
          Any claim relating to the Starlight Blog website shall be governed by
          the laws of the Owner’s home jurisdiction (the Laws of the Federal
          Republic of Nigeria) without regard to its conflict of law provisions.
        </p>
      </div>
    </div>
  );
}
