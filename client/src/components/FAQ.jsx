import { ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "About our cabins",
    questions: [
      "How long have you been in business?",
      "Why did you start this journey?",
    ],
  },
  {
    title: "Tell me more about the cabin",
    questions: [
      "What do I need to bring?",
      "How do I get to the cabin?",
    ],
  },
  {
    title: "Pets, family & friends",
    questions: [
      "Can I bring my dog?",
      "How many people can the cabins sleep?",
    ],
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-[#f5f5f3]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1f3d3a] mb-16">
          Frequently asked questions
        </h2>

        <div className="space-y-10">
          {faqCategories.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  {index + 1}. {item.title}
                </h3>

                <ul className="space-y-1 text-gray-600 leading-8">
                  {item.questions.map((question, i) => (
                    <li key={i}>• {question}</li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#e8b257] hover:bg-[#dfa646] transition rounded-lg px-8 py-8 shadow-sm flex items-center justify-between text-left">
                <span className="text-lg font-medium text-black">
                  {item.title}
                </span>

                <ArrowRight
                  size={24}
                  className="text-gray-700 flex-shrink-0"
                />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Still have a question?
          </h3>

          <p className="text-gray-700 leading-8">
            If you still have questions, contact a member of the team on{" "}
            <a
              href="#"
              className="underline font-medium text-slate-900"
            >
              live chat
            </a>{" "}
            and we’d be more than happy to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;