import { useMutation, useQueryClient } from "@tanstack/react-query";
 
export const useDeletePost = () => {
  const queryClient = useQueryClient();
 
  return useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`http://localhost:3001/orders/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete post");
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });
};