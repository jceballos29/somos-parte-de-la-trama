import React from 'react'

export interface ProgressBarProps {
  progress: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress, onChange, leftLabel, rightLabel}) => {

  return (
    <section className='w-full flex flex-col'>
      <input type="range" min={0} value={progress} step={'0.01'} className='slider' onChange={(e) => onChange(parseFloat(e?.target.value))} />
      <div className='w-full flex mt-2 justify-between text-xs text-slate-400'>
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </section>
  )
}

export default ProgressBar