import React from "react";
import privacyImage from "/Privacy-Policy-Banner.png";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen mb-10 text-lg">
      <div
        className="w-full h-32 md:h-80"
        style={{
          backgroundImage: `url(${privacyImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></div>
      <div className="w-full flex flex-col gap-y-2 lg:gap-y-3 mx-auto p-3 lg:py-10">
        <p>
          This Privacy Policy governs the manner in which Starlight Blog
          collects, uses, maintains, and discloses information collected from
          users of the site. This Privacy Policy applies to the site and all
          materials published by Starlight Team.
        </p>

        <h2 className="text-xl font-bold mt-4">
          Personal Identification Information:
        </h2>
        <p>
          We may collect personal identification information from users in a
          variety of ways, including, but not limited to, when Users create
          accounts (Sign Up) on Starlight Blog Site, subscribe to a newsletter,
          send a contact message, and in connection with other activities,
          services, features, or resources we make available on our site. Users
          may visit the site anonymously. We will collect personal
          identification information from Users only if they voluntarily submit
          such information to us. Users can refuse to supply personal
          identification information but doing so may prevent them from engaging
          in certain activities or accessing some resources available on our
          site.
        </p>

        <h2 className="text-xl font-bold mt-4">
          How we use collected information:
        </h2>
        <p>
          Starlight Blog may collect and use Users’ personal identification
          information for the following purposes:
          <ul className="flex flex-col gap-y-2 list-disc list-inside -indent-6 pl-6">
            <li>
              To improve user service: Information you provide helps us respond
              to your service requests and support needs more efficiently.
            </li>
            <li>
              To personalize user experience: We may use information in the
              aggregate to understand how our users as a group use the services
              and resources provided on our site.
            </li>
            <li>
              To send periodic emails: We may use user email addresses and/or
              phone numbers to send information and updates.
            </li>
            <li>
              User email addresses may also be used to respond to inquiries,
              questions, or other requests.
            </li>
            <li>
              Users who make a decision for Christ through our resources, their
              personal indentification information may be used as a means of
              prayer contact and follow up.
            </li>
          </ul>
        </p>

        <h2 className="text-xl font-bold mt-4">
          Sharing your personal information:
        </h2>
        <p>
          We do not sell, trade, or rent user personal identification
          information to others. However, we have no way of protecting
          information that is publicly available on our platform, e.g. profile
          images, usernames, etc that may be displayed beside user comments,
          etc.
        </p>

        <h2 className="text-xl font-bold mt-4">Third party websites:</h2>
        <p>
          Users may find advertising or other content on our site that link to
          websites and services of our partners, suppliers, advertisers,
          sponsors, licensors and other third parties. We do not control the
          content or links that appear on these websites and are not responsible
          for the practices employed by websites linked to or from our site;
          even as we take steps to ensure only websites with wholesome content
          are linked to us. In addition, these websites or services, including
          their content and links, may be constantly changing. These websites
          and services may have their own privacy policies and terms of use
          policies. Browsing and interaction on any other website, including
          websites which have a link to our site, is subject to that website's
          own terms and policies.
        </p>

        <h2 className="text-xl font-bold mt-4">
          Changes to this Privacy Policy:
        </h2>
        <p>
          Starlight Blog Site has the discretion to update this Privacy Policy
          at any time without prior notification or information. We encourage
          users to frequently check this page for any changes. You acknowledge
          and agree that it is your responsibility to review this Privacy Policy
          periodically and become aware of modifications.
        </p>

        <h2 className="text-xl font-bold mt-4">
          Your acceptance of these terms:
        </h2>
        <p>
          By creating an account (signing up), browsing or downloading content
          on our site, you signify your acceptance of this Privacy Policy. If
          you do not agree to this Privacy Policy, please do not signup, and
          quitely navigate away from the site. The continuation of your account
          and/or continued visitation to the site following the posting of
          changes to this Privacy Policy will be deemed your acceptance of those
          changes.
        </p>
      </div>
    </div>
  );
}
