type SocialCardParameters = {
  img_path: string;
  link: string;
};

export function SocialCard({ img_path, link }: SocialCardParameters) {
  return (
    <>
      <div
        className="bg-blue-900/15 py-1 px-1"
        onClick={() => {
          window.open(link);
        }}
      >
        <img src={img_path} width={32} height={32}></img>
      </div>
    </>
  );
}
