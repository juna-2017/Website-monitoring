import { checkUrl } from "./src/tools/checkUrl";
import { IRequest, requests } from "./src/tools/urls";

const checkUrls = async (requests: IRequest[]): Promise<void> => {
    await Promise.all(
        requests.map(async (request) => {
            await checkUrl(request.url, request.config)
        })
    );
};

checkUrls(requests)
