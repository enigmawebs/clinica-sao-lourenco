import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const validated = api.contact.create.input.parse(data);
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          // Type cast since we might not have full control over error schema shape at runtime perfectly
          throw new Error(errorData.message || "Dados inválidos");
        }
        throw new Error('Falha ao enviar mensagem');
      }
      
      // Parse the successful response
      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}
