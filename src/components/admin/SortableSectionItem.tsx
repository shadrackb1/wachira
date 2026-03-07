import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface SectionListProps {
  section: any;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleVisibility: (id: string) => void;
}

const SortableSectionItem: React.FC<SectionListProps> = ({ section, isSelected, onSelect, onDelete, onToggleVisibility }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        group relative flex items-center justify-between p-3 mb-2 rounded-lg border transition-all cursor-pointer
        ${isSelected ? 'bg-primary/5 border-primary shadow-sm' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'}
      `}
      onClick={() => onSelect(section.id)}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <GripVertical className="w-4 h-4" />
        </button>
        
        <div className="flex flex-col min-w-0">
          <span className="font-medium text-sm text-gray-900 truncate capitalize">
            {section.type.replace('-', ' ')}
          </span>
          <span className="text-xs text-gray-500 truncate">
            {section.data.title || section.data.tagline || 'Untitled Section'}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleVisibility(section.id);
          }}
          className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
          title={section.hidden ? "Show" : "Hide"}
        >
          {section.hidden ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(section.id);
          }}
          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
          title="Delete"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
      
      {isSelected && (
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-r-lg"></div>
      )}
    </div>
  );
};

export default SortableSectionItem;
