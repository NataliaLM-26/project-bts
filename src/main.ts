import { Component, computed, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  TIMELINE,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
  type Category,
  type TimelineEvent,
} from './bts-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  styleUrl: 'app.component.css',
  template: `
    <!-- Hero -->
    <header class="hero">
      <div class="hero__glow"></div>
      <div class="hero__inner">
        <p class="hero__eyebrow">Desde el 13 de junio de 2013</p>
        <h1 class="hero__title">
          BTS <span class="hero__title-accent">·</span> Una Cronología Violeta
        </h1>
        <p class="hero__subtitle">
          Desde el debut de siete integrantes en Seúl hasta lanzamientos
          récord como grupo, carreras solistas, embajadores de marcas globales,
          el servicio militar y el tan esperado reencuentro — cada hito en un
          recorrido suave y navegable.
        </p>
        <div class="hero__stats">
          <div class="stat">
            <span class="stat__num">12+</span>
            <span class="stat__label">Años juntos</span>
          </div>
          <div class="stat">
            <span class="stat__num">7</span>
            <span class="stat__label">Integrantes</span>
          </div>
          <div class="stat">
            <span class="stat__num">{{ milestones().length }}</span>
            <span class="stat__label">Hitos mostrados</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Filter bar -->
    <nav class="filters" role="tablist" aria-label="Filtrar cronología por categoría">
      <button
        class="chip"
        [class.chip--active]="activeCategory() === 'all'"
        (click)="setCategory('all')"
        role="tab"
        [attr.aria-selected]="activeCategory() === 'all'"
      >
        Todos
      </button>
      @for (cat of categories; track cat) {
        <button
          class="chip"
          [class.chip--active]="activeCategory() === cat"
          (click)="setCategory(cat)"
          role="tab"
          [attr.aria-selected]="activeCategory() === cat"
          [style.--chip-color]="catColor(cat)"
        >
          {{ catLabel(cat) }}
        </button>
      }
    </nav>

    <!-- Timeline -->
    <main class="timeline">
      @for (event of milestones(); track event.id) {
        <article
          class="card"
          [attr.data-category]="event.category"
          [style.--card-accent]="catColor(event.category)"
        >
          <div class="card__marker">
            <span class="card__emoji">{{ event.emoji }}</span>
          </div>
          <div class="card__body">
            <div class="card__meta">
              <span class="card__year">{{ event.year }}</span>
              <span class="card__date">{{ event.displayDate }}</span>
              <span class="card__tag">{{ catLabel(event.category) }}</span>
            </div>
            <h2 class="card__title">{{ event.title }}</h2>
            <p class="card__desc">{{ event.description }}</p>
          </div>
        </article>
      } @empty {
        <p class="timeline__empty">No hay hitos en este filtro todavía.</p>
      }
    </main>

    <footer class="footer">
      <p>
        Una cronología tributo hecha por fans. Corazones violeta para ARMY en
        todo el mundo.
      </p>
    </footer>
  `,
})
export class App {
  private readonly allEvents = TIMELINE;
  readonly categories = Object.keys(CATEGORY_LABELS) as Category[];
  readonly activeCategory = signal<Category | 'all'>('all');

  readonly milestones = computed<TimelineEvent[]>(() => {
    const cat = this.activeCategory();
    const list = cat === 'all' ? this.allEvents : this.allEvents.filter((e) => e.category === cat);
    return [...list].sort((a, b) => a.date.localeCompare(b.date));
  });

  setCategory(cat: Category | 'all'): void {
    this.activeCategory.set(cat);
  }

  catLabel(cat: Category): string {
    return CATEGORY_LABELS[cat];
  }

  catColor(cat: Category): string {
    return CATEGORY_COLORS[cat];
  }
}

bootstrapApplication(App);
