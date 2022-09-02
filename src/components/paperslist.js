import React from "react";

const PapersList = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-4xl text-3xl mt-5">
          Accepted Papers
        </h1>
      </div>
    <dl>
    <dt>Pop Music Generation with Controllable Phrase Lengths</dt>
    <dd>Daiki Naruse, Tomoyuki Takahata, Yusuke Mukuta, Tatsuya Harada</dd>
    <dt>In Search Of Sañcāras: Tradition-Informed Repeated Melodic Pattern Recognition In Carnatic Music</dt>
    <dd>Thomas Nuttall, Genís Plaja-Roglans, Lara Pearson, Xavier Serra</dd>
    <dt>Performance MIDI-to-score conversion by neural beat tracking</dt>
    <dd>Lele Liu, Qiuqiang Kong, Veronica Morfi, Emmanouil Benetos</dd>
    </dl>
    </div>
  );
};

export default PapersList;
