import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Aalpha Gir Gay Gaushala",
    description:
        "Learn about Aalpha Gir Gay Gaushala, our founders Shri Kishor Balubhai Vataliya and Shri Kiranbhai Balubhai Vataliya, and our commitment to purity.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
