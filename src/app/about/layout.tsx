import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Alpha Farm - Gir Cow Gaushala",
    description:
        "Learn about Alpha Farm Gaushala, our founders Shri Kishor Balubhai Vataliya and Shri Kiranbhai Balubhai Vataliya, and our commitment to pure Gir Cow products.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
