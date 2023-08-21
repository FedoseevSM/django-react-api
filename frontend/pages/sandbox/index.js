import Link from "next/link"

function Sandbox() {
    return (
        <div>
        <div>
        <Link href="sandbox/button">
            <a>
                Кнопка
            </a>
        </Link>
        </div>
        <div>
        <Link href="sandbox/buttongroup">
            <a>
                Группа кнопок
            </a>
        </Link>
        </div>
        <div>
        <Link href="sandbox/outlink">
            <a>
                Внешняя ссылка
            </a>
        </Link>
        </div>
        <div>
        <Link href="sandbox/divider">
            <a>
                Разделитель
            </a>
        </Link>
        </div>
        </div>
    )
  }
  
  export default Sandbox
  