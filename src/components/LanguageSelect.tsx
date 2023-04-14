import Select from "react-select";

const options = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Russian",
  "Greek",
].map(x => {return {value: x, label: x};});

export interface LanguageSelectProps {
  language: string | null,
  setLanguage(language: string | null): void;
}

export default function LanguageSelect({language, setLanguage}: LanguageSelectProps) {
  return (
    <Select
      placeholder="Select langugage"
      defaultValue={options[0]}
      value={(language) ? {value: language, label: language} : undefined}
      onChange={(newValue) => {
        if (newValue) {
          setLanguage(newValue.value);
        } else {
          setLanguage(null);
        }
      }}
      options={options}
      isClearable={true}
      isSearchable={true}
    />
  );
}