import Form from "@/components/FormProveedor"
import { db } from "@/lib/mysql"
import { editProveedor } from "@/lib/actions"

async function page({ searchParams }) {
  const [proveedor] = await db.query('select * from proveedores where codigo = ?', [searchParams.codigo]);

  return (
    <div>
      <h3>Editar proveedor {searchParams.codigo}</h3>
      <Form action={editProveedor} title='Editar proveedor' proveedor={proveedor} disabled={false} />
    </div>
  )
}


export default page