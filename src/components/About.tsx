import { FC } from 'react';

const About: FC = () => {
  
return (

<section id="about" className="py-16 md:py-24 bg-white">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">

<h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>

<div className="w-20 h-1 bg-indigo-600 mx-auto mt-4"></div>
        
</div>
        
<div className="flex flex-col md:flex-row gap-12">
<div className="md:w-1/2">

<h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>

<p className="text-gray-800 mb-4">

              I'm a passionate Software & AI developer with over 1.5 years of experience as a Trainee & Intern, creating modern web applications.
              My journey in tech started during my computer science degree where I discovered my passion for
              for creating intuitive user interfaces.

</p>

<p className="text-gray-800 mb-4">

              I specialize in React, and modern CSS frameworks. I believe in writing clean, 
              maintainable code and creating seamless user experiences. When I'm not coding, you can find me 
              contributing to open-source projects or exploring new design trends.

</p>

<p className="text-gray-800">

              Currently, I'm focused on learning backend technologies to become a full-stack developer 
              and expanding my skills in mobile development with React Native.

</p>

</div>
          
<div className="md:w-1/2">

<h3 className="text-2xl font-semibold text-gray-900 mb-4">Education & Experience</h3>
 
<div className="space-y-6">
<div className="border-l-2 border-indigo-200 pl-4 py-1">

<h4 className="font-bold text-gray-900">Bachelor of Computer Applications</h4>
                
<p className="text-indigo-800">Sindhi College</p>
<p className="text-gray-600 mt-1">I am a graduated student in the year 2026.</p>

</div>
              

<div className="border-l-2 border-indigo-200 pl-4 py-1">
            
<h4 className="font-bold text-gray-900">Intern Software & AI Developer</h4>

<p className="text-indigo-800">Techpearl Software Pvt Ltd</p>
<p className="text-gray-600 mt-1">I have a Hands-On real world projects & a releastic experience of 1.5 years as a Trainee & Intern and how a startup software company is operated and managed.</p>

</div>
              

<div className="border-l-2 border-indigo-200 pl-4 py-1">

<h4 className="font-bold text-gray-900">Sales & Marketing</h4>

<p className="text-indigo-800">Sky Udaan En - Fab Pvt Ltd</p>
<p className="text-gray-600 mt-1">I was responsible for promoting and selling products, as well as managing customer relationships, hiring candidates, & a marketing team lead.</p>

</div>


<div className="border-l-2 border-indigo-200 pl-4 py-1">

<h4 className="font-bold text-gray-900">Data Entry</h4>

<p className="text-indigo-800">Work From Home</p>
<p className="text-gray-600 mt-1">Inputting the data in their Dashboards & Reports.</p>
 
</div>

</div>
</div>
</div>
</div>

  
</section>

);
};

export default About;