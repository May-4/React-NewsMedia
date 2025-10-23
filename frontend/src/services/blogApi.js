// blogApi.js
import { axiosInstance, requestHandler } from "./apiConfig";
import apiurls from "./apiurls";

const blogApi = {
   fetchBlog: () =>
      requestHandler(() => axiosInstance.get(apiurls.fetchBlog)),

   fetchBlogById: (id) =>
      requestHandler(() =>
         axiosInstance.get(apiurls.fetchBlogById, { params: { id } })
      ),

   updateBlogById: (id, data) =>
      requestHandler(() =>
         axiosInstance.put(apiurls.updateBlogById, data, { params: { id } })
      ),

   deleteBlogById: (id) =>
      requestHandler(() =>
         axiosInstance.delete(apiurls.deleteBlogById, { params: { id } })
      ),

   saveBlog: (data) =>
      requestHandler(() =>
         axiosInstance.post(apiurls.saveBlog, data)
      ),
};

export default blogApi;
