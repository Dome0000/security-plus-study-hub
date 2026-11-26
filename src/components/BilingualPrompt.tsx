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
      <p className="bilingual-en" style={{ margin: 0 }}>
        {textEn}
      </p>
      {showThai && (
        <p className="bilingual-th" style={{ marginTop: '6px', marginBottom: 0 }}>
          {textTh}
        </p>
      )}
    </div>
  );
}
