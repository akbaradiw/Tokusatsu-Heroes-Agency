import Image from "next/image";
const About = () => {
  return (
    <div className="flex justify-around mt-6">
      <div className="w-1/2 h-auto ">
        <h1 className=" text-2xl my-2   font-bold text-center  text-red-600 ">
          ABOUT US
        </h1>
        <h2 className="text-center mb-2 text-xl text-red-600">
          {" "}
          Kami siap membantu kalian menegakkan keadilan & menumpas kejahatan!
        </h2>
        <p className="">
          私たちは正義を守り、犯罪を根絶するために全力を尽くします
          顧客は非常に重要であり、顧客は顧客に続きます。はい、そして私のものです。子どもたちはバスケットボールから恩恵を受けています。妊婦には今、清潔なメイクが必要です。今はヘイト行為は行われておらず、医療の尊厳が必要とされている時期です。著者は生きろと言った。明日は悲劇的な出来事の行方です。アエネアンの喉は代償以外は誰も恐れていないが、高校は妊娠している。
          実際のところ、フットボール
          ソースは素晴らしい投資であり、エロスの飲める要素です。しかし、アエネアスはそうではありません。臨床試験を進める必要がある。しかし、ポルタ・ティンシダント・マウリス、あるいはメイクは違っていました。マティス、オルシ・サセプティ、時々ソリシトゥジンでは、血の塊はありませんでしたが、ラオレット・エロス・エロス・ウト・マウリスがありました。
        </p>{" "}
      </div>
      <Image
        src="/sentaikick.jpg"
        alt="Herokick"
        width={400}
        height={400}
        className="rounded-lg shadow-md hover:-translate-y-4 hover:scale-110 transition ease-in-out delay-150"
      />
    </div>
  );
};
export default About;
