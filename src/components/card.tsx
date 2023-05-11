import { Repository } from "@/generated";

const RepositoryCard = ({ repo }: { repo: Repository }) => {
  const {
    name,
    url,
    owner: { login, url: ownerUrl },
    description,
    stargazerCount,
    primaryLanguage,
  } = repo;

  return (
    <div className="bg-white flex flex-col shadow-md rounded-md mt-4 w-full h-full p-4">
      <h3 className="text-xl text-slate-950 font-semibold mb-2">
        <a href={`${url}`} target="_blank">
          {name}
        </a>{" "}
        /{" "}
        <a href={`${ownerUrl}`} target="_blank">
          {login}
        </a>
      </h3>
      <div className="flex items-center mt-auto mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 0l2.478 7.632h8.022l-6.496 4.718 2.478 7.629L10 14.74l-6.522 4.239 2.478-7.629L.5 7.632h8.022L10 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-slate-800 text-md">{stargazerCount}</span>
      </div>
      <p className="text-gray-500 text-sm">{description}</p>
      <span className="text-slate-800 text-md">
        Written in: <b>{primaryLanguage?.name || ""}</b>
      </span>
    </div>
  );
};

export default RepositoryCard;
