interface BilingualPromptProps {
  textEn: string;
  textTh: string;
  showThai: boolean;
  className?: string;
}

export function BilingualPrompt({
  textEn,
  textTh,
  showThai,
  className = ''
}: BilingualPromptProps) {
  return (
    <div className={className}>
      <p className="bilingual-en" style={{ marginBottom: showThai ? '6px' : 0 }}>
        {textEn}
      </p>
      {showThai && (
        <p className="bilingual-th" style={{ marginBottom: 0 }}>
          {textTh}
        </p>
      )}
    </div>
  );
}
