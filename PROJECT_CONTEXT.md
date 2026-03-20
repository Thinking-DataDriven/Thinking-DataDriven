# PROJECT_CONTEXT.md

## Название проекта
Thinking OS / MindOS

## Суть продукта
Thinking OS — это личная AI-система развития мышления.

Продукт должен:
- хранить структурированную память о пользователе
- помогать размышлять, а не просто отвечать
- развивать мета-навыки
- сжимать внешний информационный поток в полезные инсайты
- выявлять bottleneck в мышлении, обучении и принятии решений
- предлагать лучший следующий фокус развития

## Главная идея
Это не просто knowledge base и не просто AI-чат.
Это personal thinking system / growth operating system.

Продукт должен соединять:
1. личную память
2. размышление с ИИ
3. обучение по мета-навыкам
4. выжимку из контента
5. навигатор роста

## Основные модули MVP
1. Memory
2. Think with AI
3. Knowledge Feed
4. Growth Navigator
5. Reviews & Patterns

## Основные экраны MVP
### 1. Главная
Показывает:
- bottleneck недели
- навык недели
- главную рекомендацию
- активные проекты
- последние решения
- выжимку из знаний
- найденные паттерны

### 2. Думать с ИИ
Режимы:
- Декомпозиция
- Корневая причина
- Разбор решения
- Контраргумент
- Карта системы
- Лучший следующий шаг

Этот экран должен быть не обычным чатом, а структурированным thinking workspace.

### 3. Лента знаний
Сюда попадают:
- статьи
- заметки
- transcript видео
- мысли спикеров
- AI-материалы
- внешние ссылки

Для каждого элемента:
- summary
- ключевые тезисы
- применимость
- связь с проектами
- связь с мета-навыками
- действия:
  - сохранить как insight
  - связать с проектом
  - превратить в principle
  - добавить в тренировку навыка

### 4. Карта роста
Показывает:
- список мета-навыков
- текущую оценку
- системную оценку
- подтверждающие сигналы
- текущий приоритет
- рекомендуемое упражнение

### 5. Обзоры и паттерны
Показывает:
- weekly review
- monthly review
- повторяющиеся ошибки
- повторяющиеся bottleneck
- извлеченные принципы
- сильные решения
- слабые допущения

## Основные сущности данных
### UserProfile
- id
- name
- current_goals
- current_focus
- interests
- preferred_learning_style
- operating_constraints
- long_term_direction

### Project
- id
- title
- description
- status
- domain
- priority
- linked_goals

### MetaSkill
- id
- name
- description
- indicators
- training_methods

### SkillAssessment
- id
- user_id
- skill_id
- score_self
- score_system
- evidence
- date

### Decision
- id
- title
- context
- options
- chosen_option
- rationale
- risks
- expected_outcome
- actual_outcome
- confidence
- project_id
- date

### Mistake
- id
- title
- symptom
- root_cause
- recurring_pattern
- principle_extracted
- severity
- related_project
- date

### Hypothesis
- id
- title
- belief
- evidence_for
- evidence_against
- test
- metric
- status
- result
- date

### Reflection
- id
- type (daily / weekly / monthly)
- content
- extracted_insights
- identified_bottleneck
- next_focus
- date

### KnowledgeItem
- id
- source_type
- source_title
- author_or_speaker
- reference_url
- raw_text
- summary
- key_points
- actionability
- relevance_score
- linked_topics
- linked_skills
- linked_projects
- ingested_at

### Insight
- id
- statement
- why_it_matters
- application
- linked_knowledge_item
- linked_project
- linked_skill

### Principle
- id
- statement
- source_type
- source_id
- domain
- confidence
- active

### Recommendation
- id
- type
- message
- why
- evidence
- priority
- generated_at

### BottleneckSnapshot
- id
- bottleneck
- why_detected
- evidence
- suggested_action
- date

## UX-принципы
- Интерфейс на русском
- Desktop-first
- Чистый premium SaaS стиль
- Спокойная визуальная система
- Не перегружать экран
- ИИ не должен заменять мышление пользователя
- ИИ должен помогать думать глубже

## Product principles
- Не строить "еще один чат"
- Не строить "еще одну заметочницу"
- Главная ценность — связка:
  контент → инсайт → принцип → действие → изменение системы
- Weekly review и bottleneck detection — ядро продукта
- Thinking partner должен быть сильнее, чем просто question-answer interface

## Главные AI-режимы
### 1. Thinking Partner
Помогает:
- декомпозировать
- искать корневую причину
- оспаривать слабую логику
- находить следующий лучший шаг

### 2. Memory Curator
Извлекает из диалогов и заметок:
- решения
- ошибки
- гипотезы
- принципы
- сигналы слабых мета-навыков

### 3. Knowledge Curator
Суммаризирует контент и связывает его с:
- проектами
- навыками
- текущим bottleneck
- действиями

### 4. Growth Coach
Анализирует:
- рефлексии
- ошибки
- решения
- ленту знаний
- оценки навыков

И выдает:
- bottleneck
- skill priority
- weekly focus
- explanation with evidence

## MVP-стек
### Frontend
- Next.js
- React
- Tailwind
- shadcn/ui

### Backend
- FastAPI или Node/NestJS

### Database
- PostgreSQL

### Search / Retrieval
- PostgreSQL + vector search на раннем этапе

## Что уже определено
- high-level product vision
- структура модулей
- сущности данных
- логика экранов
- русская UI-концепция

## Что нужно сделать сначала
1. Собрать фронтенд-каркас MVP
2. Создать layout и routing
3. Реализовать 5 основных экранов
4. Подготовить PostgreSQL schema
5. Создать базовые API endpoints
6. Подготовить mock data
7. Затем подключать AI-логику постепенно

## Приоритет разработки
### Phase 1
- frontend MVP screens
- mock data
- component system
- navigation
- Russian UI

### Phase 2
- database schema
- backend API
- persistence

### Phase 3
- AI integration
- memory extraction
- weekly review synthesis
- recommendations
