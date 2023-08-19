"use client";

import { useState } from "react";
import style from "@/style/pageStyle.module.css";

export default function singleTextDroprown() {
  const [isOpen, setIsOpen] = useState(0);
  const open = (num: number) => setIsOpen(num);
  const close = () => setIsOpen(0);

  return (
    <div>
      <div>
        <ul>
          <li><button>Español</button></li>
          <li><button>English</button></li>
          <li><button>Svenska</button></li>
        </ul>
      </div>
      <div>
        {}
      </div>
    </div>
  );
}
