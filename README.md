ТЕСТОВОЕ ЗАДАНИЕ для CAD Exchanger

script: {
dev: next dev
}

Выполнил все ТЗ, кроме того, что использовал tailwind вместо CSS in JS.

Реализовал две страницы ('/' и '/contact') в очень простом стиле без перенагруженных элементов (по макету).

На странице '/' сверстал все по ТЗ не отходя от макета (+ гибкий адаптив).
на странице '/contact' сверстал форму, которая отправляет только ВАЛИДИРОВАННЫЕ данные на сервер, а после искуственной задержки в 1 секунду отдает ответ (+ гибкий адаптив).

Постарался сделать все таким образом, чтобы можно было в дальнейшем расширять приложение и разные его компоненты.

Основные технологии: next (мета-фреймоврк), react-hook-form (создание форм), yup (создание схем для форм), jotai (очень легкий и простой state-management), axios (HTTP клиент).

Также сделал позаботился о metadata для страниц (+ opanGraph).

Сам проект развернут на Vercel.

Все.

PS: Конечно хотелось сделать куда больше и лучше, но, к сожалению, из-за личных дел пришлось затянуть все это. Я пробовал все сделать с помощью CSS in JS, используя styled-components и material-ui, но это не до конца у меня вышло, поэтому пришлось переписывать на tailwind. В принципе, все можно было сделать даже за один день, но как получилось.
