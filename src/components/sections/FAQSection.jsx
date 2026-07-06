import { useState } from "react";
import faqs from "../../data/faq";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { Plus, Minus } from "lucide-react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="py-40 bg-[#050505]"
    >
      <Container>

        <SectionTitle
          label="Questions, Answered."
          title="Frequently Asked."
        />

        <div className="mt-20">

          {faqs.map((faq, index) => (
            <div
              key={index}
                className="
                group
                border-b
                border-white/10
                transition-all
                duration-500
                hover:border-red-500/40
            "
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  py-8
                  text-left
                "
              >

                <h3
                  className="
                    font-['Syne']
                    text-2xl
                    font-semibold
                  "
                >
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <Minus />
                ) : (
                  <Plus />
                )}

              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    openIndex === index
                      ? "max-h-60 pb-8"
                      : "max-h-0"
                  }
                `}
              >

                <p
                  className="
                    max-w-3xl
                    text-gray-400
                    leading-8
                  "
                >
                  {faq.answer}
                </p>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default FAQSection;