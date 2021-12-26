export default function LanguagesContainer() {
  return (
    <>
      <div className="flex items-center">
        <div className="text-xl font-semibold">Languages</div>
        <div className="border-2 border-black my-4 w-full ml-6" />
      </div>
      <div className="flex justify-between">
        <div>Spanish</div>
        <div>Native</div>
      </div>
      <div className="flex justify-between">
        <div>English</div>
        <div>Fluent</div>
      </div>
      <div className="flex justify-between">
        <div>German</div>
        <div>Basic</div>
      </div>
    </>
  );
}
