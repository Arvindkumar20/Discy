import React from "react";
import { useTheme } from "../context/ThemeContext"; // adjust path based on your setup

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen py-10 px-4 md:px-20`}>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Intro Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our mission is to share and grow the world’s knowledge.</h2>
          <p className="text-sm leading-relaxed">
            Discy mission is to share and grow the world’s knowledge. A vast amount of the knowledge that would be valuable to many people is currently only available to a few — either locked in people’s heads, or only accessible to select groups. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.
            <br /><br />
            The potential of this blog is huge. If we can execute on our mission, we’re going to make a big impact on the world. We just need to get a smart group of people together that can get us there.
          </p>
        </section>

        {/* Embedded Video */}
        <section className="flex justify-center">
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://youtu.be/JuyB7NO0EYY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        {/* Why Discy Section */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Why Choosing Discy<br />Our Values</h3>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li><strong>Maintain long-term value:</strong> We are building a product that we hope lasts forever. We want to be a strong and independent engine, this long-term focus guides all of the decisions we make.</li>
            <li><strong>Continuously learn and adapt:</strong> We value experimentation, motion-driven decisions, and speed of iteration. We push to replication with every commit so we launch as soon as work is done and as quickly as possible.</li>
            <li><strong>Be results:</strong> We value people who have great ideas but who also can quickly define them and find ways to bring their ideas into life.</li>
            <li><strong>Be direct and respectful:</strong> We speak and receive constant feedback. We trust each other to grow and strengthen us, so if you have anything in mind don’t hesitate to call it out.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default About;
