import React, { useEffect, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createUserFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  cpf: z
    .string()
    .min(14, "CPF inválido.")
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "CPF inválido. O CPF deve estar no formato xxx.xxx.xxx-xx"
    ),
  rg: z.string().optional(),
  cep: z.string().min(1, "CEP é obrigatório"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatório"),
  estado: z.string().min(1, "Estado é obrigatório"),
  contato: z
    .string()
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Formato de telefone inválido")
    .optional(),
  email: z.string().email("Formato de e-mail inválido"),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export function FormCPF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const [cepValue, setCepValue] = useState("");

  const onSubmit = (data: CreateUserFormData) => {
    console.log(data);
  };
  {/* Formação de contato e cpf com regex */}
  useEffect(() => {
    setValue("cpf", getValues("cpf"));
  }, [setValue, getValues]);

  useEffect(() => {
    setValue("contato", getValues("contato"));
  }, [setValue, getValues]);

  const handleCpfChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let formattedCpf = event.target.value.replace(/\D/g, "");
      if (formattedCpf.length > 3) {
        formattedCpf = formattedCpf.replace(/^(\d{3})(\d)/, "$1.$2");
      }
      if (formattedCpf.length > 7) {
        formattedCpf = formattedCpf.replace(
          /^(\d{3})\.(\d{3})(\d)/,
          "$1.$2.$3"
        );
      }
      if (formattedCpf.length > 11) {
        formattedCpf = formattedCpf.replace(
          /^(\d{3})\.(\d{3})\.(\d{3})(\d)/,
          "$1.$2.$3-$4"
        );
      }
      setValue("cpf", formattedCpf);
    },
    [setValue]
  );

  const handleContatoChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let formattedContato = event.target.value.replace(/\D/g, "");
      if (formattedContato.length > 2) {
        formattedContato = formattedContato.replace(/^(\d{2})(\d)/, "($1) $2");
      }
      if (formattedContato.length > 8 && formattedContato.length <= 16) {
        formattedContato = formattedContato.replace(/(\d{4,5})(\d)/, "$1-$2");
      }
      setValue("contato", formattedContato);
    },
    [setValue]
  );
  {/* Busca de CEP */}
  const handleCepChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const cep = event.target.value.replace(/\D/g, "");
      setCepValue(cep);
      if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => res.json())
          .then((data) => {
            if (!data.erro) {
              setValue("endereco", data.logradouro);
              setValue("bairro", data.bairro);
              setValue("cidade", data.localidade);
              setValue("estado", data.uf);
            } else {
              alert("CEP não encontrado.");
              setCepValue("");
            }
          })
          .catch(() => {
            alert("Erro ao buscar CEP.");
            setCepValue("");
          });
      }
    },
    [setValue]
  );
  {/* logica para botão de cancelamento */}
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCancel = () => {
    setShowConfirmation(true);
  };

  const handleConfirmCancel = () => {
    console.log("Cancelado!");
    window.location.href = "/";
  };

  const handleCancelModalClose = () => {
    setShowConfirmation(false);
  };

  return (
    <main className="flex p-4 h-full bg-slate-500 items-center justify-center text-yellow-50 font-bold">
      {/* Formulario de Cadastro */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-xs text-black"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="name">NOME COMPLETO: </label>
          <input
            type="text"
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name?.message && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="cpf">CPF: </label>
          <input
            type="text"
            {...register("cpf")}
            onChange={handleCpfChange}
            aria-invalid={!!errors.cpf}
          />
          {errors.cpf?.message && (
            <span className="text-red-600">{errors.cpf.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="rg">RG: </label>
          <input type="text" {...register("rg")} aria-invalid={!!errors.rg} />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="cep">CEP: </label>
          <input
            type="text"
            {...register("cep")}
            value={cepValue}
            onChange={handleCepChange}
            aria-invalid={!!errors.cep}
          />
          {errors.cep?.message && (
            <span className="text-red-600">{errors.cep.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="endereco">ENDEREÇO: </label>
          <input
            id="endereco"
            type="text"
            {...register("endereco")}
            aria-invalid={!!errors.endereco}
          />
          {errors.endereco?.message && (
            <span className="text-red-600">{errors.endereco.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="bairro">BAIRRO: </label>
          <input
            type="text"
            {...register("bairro")}
            aria-invalid={!!errors.bairro}
          />
          {errors.bairro?.message && (
            <span className="text-red-600">{errors.bairro.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="cidade">CIDADE: </label>
          <input
            type="text"
            {...register("cidade")}
            aria-invalid={!!errors.cidade}
          />
          {errors.cidade?.message && (
            <span className="text-red-600">{errors.cidade.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="estado">ESTADO: </label>
          <input
            type="text"
            {...register("estado")}
            aria-invalid={!!errors.estado}
          />
          {errors.estado?.message && (
            <span className="text-red-600">{errors.estado.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="tel">CONTATO: </label>
          <input
            type="tel"
            {...register("contato")}
            onChange={handleContatoChange}
            aria-invalid={!!errors.contato}
          />
          {errors.contato?.message && (
            <span className="text-red-600">{errors.contato.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email">E-MAIL: </label>
          <input
            type="email"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email?.message && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <button
            type="submit"
            className="w-20 bg-sky-600 rounded font-semibold text-white h-10 hover:bg-sky-700"
          >
            ENVIAR
          </button>
          <div className="mt-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </div>
        {/* Modal de Confirmação */}
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg text-black">
              <p>Deseja realmente cancelar?</p>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  onClick={handleCancelModalClose}
                >
                  Não
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={handleConfirmCancel}
                >
                  Sim
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </main>
  );
}
