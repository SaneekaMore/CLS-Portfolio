function SectionTitle({
  label,
  title,
}) {
  return (
    <div className="mb-24">

      <p
        className="
        uppercase
        tracking-[0.45em]
        text-sm
        text-gray-500
        mb-5"
      >
        {label}
      </p>

      <h2
        className="
        font-['Syne']
        text-4xl
        md:text-6xl
        font-bold
        tracking-[-0.04em]"
      >
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;