import SearchHeader from "@/components/SearchHeader";

export const metadata = {
  title: "Google",
  description: "search anything...",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
