#!/usr/bin/env python3
import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()
    
    # Custom high-contrast ATS styles
    primary_color = colors.HexColor("#0f172a") # Slate 900
    cyan_accent = colors.HexColor("#0284c7")   # Sky 600
    text_muted = colors.HexColor("#475569")    # Slate 600
    border_color = colors.HexColor("#cbd5e1")  # Slate 300

    name_style = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=primary_color,
        alignment=TA_CENTER
    )

    tagline_style = ParagraphStyle(
        'Tagline',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=cyan_accent,
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=text_muted,
        alignment=TA_CENTER
    )

    section_header_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=primary_color,
        spaceAfter=3,
        textTransform='uppercase'
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor("#1e293b")
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=colors.HexColor("#0f172a")
    )

    item_sub_style = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=cyan_accent
    )

    date_style = ParagraphStyle(
        'DateStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=text_muted,
        alignment=TA_RIGHT
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor("#1e293b"),
        leftIndent=12,
        firstLineIndent=-12
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("MIHIR N. MODI", name_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("Aspiring DevOps, MLOps & AI Systems Engineer", tagline_style))
    story.append(Spacer(1, 3))
    contact_text = (
        "Gandhinagar, Gujarat, India &nbsp;|&nbsp; "
        "Email: modimihirn@gmail.com &nbsp;|&nbsp; "
        "GitHub: github.com/modimihir07 &nbsp;|&nbsp; "
        "LinkedIn: linkedin.com/in/mihir-n-modi-632018377"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=1, spaceAfter=6))

    # 2. EXECUTIVE SUMMARY
    story.append(Paragraph("Executive Systems Summary", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=4))
    summary_text = (
        "Computer engineering student passionate about production-level reliability across AI, DevOps, and MLOps. "
        "Creator and maintainer of <b>Agentic OS</b> (218+ GitHub Stars, 66+ Forks), a 7-layer local operating system and multi-agent control plane. "
        "Proven background codifying AWS EKS microservices with Terraform and ArgoCD GitOps, developing raw JDBC concurrency engines with zero race conditions, "
        "and engineering sub-3s multimodal Gemini diagnostics for agricultural edge clients."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 7))

    # 3. CORE TECHNICAL SKILLS
    story.append(Paragraph("Core Technical Capabilities", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=4))
    
    skills_data = [
        [
            Paragraph("<b>Cloud & DevOps:</b>", item_title_style),
            Paragraph("AWS EKS, Kubernetes, Docker, Terraform (IaC), ArgoCD (GitOps), GitHub Actions CI/CD, Linux (Ubuntu/Mint), DevSecOps, Prometheus, Grafana", body_style)
        ],
        [
            Paragraph("<b>AI & MLOps:</b>", item_title_style),
            Paragraph("Multi-Agent Orchestration, Gemini API & CLI, FastAPI, Python, SQLite FTS5 Hybrid Search, LLM Tool Protocols, Token Telemetry, APScheduler Cron", body_style)
        ],
        [
            Paragraph("<b>Backend & Systems:</b>", item_title_style),
            Paragraph("Java 17, Spring Boot 3, MySQL 8 (Raw JDBC, Pessimistic Locking SELECT FOR UPDATE), Rust Systems Programming, TypeScript, Next.js 15, PostgreSQL", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[110, 430])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 7))

    # 4. FLAGSHIP ENGINEERING PROJECTS
    story.append(Paragraph("Flagship Engineering Systems", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=5))

    # Project 1: Agentic OS
    p1_header = [
        [
            Paragraph("<b>Agentic OS</b> | <i>7-Layer Local Multi-Agent Control Plane</i>", item_title_style),
            Paragraph("<b>218+ Stars • 66+ Forks</b>", date_style)
        ]
    ]
    t1 = Table(p1_header, colWidths=[400, 140])
    t1.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t1)
    story.append(Paragraph("Stack: Python, FastAPI, SQLite FTS5, APScheduler, Tailwind CSS, Gemini CLI | URL: github.com/modimihir07/agentic-os", item_sub_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Architected a 7-layer locally-hosted operating system coordinating opencode, Hermes Agent, and Antigravity CLI at zero subscription cost.", bullet_style))
    story.append(Paragraph("• Built dynamic task routing engine and persistent memory tier leveraging SQLite FTS5 lexical/semantic hybrid search.", bullet_style))
    story.append(Paragraph("• Authored 15+ executable SKILL.md tool packs with automated evaluation benchmarks and real-time token cost quota guards.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 2: CloudMart DevOps
    p2_header = [
        [
            Paragraph("<b>CloudMart DevOps Platform</b> | <i>AWS EKS GitOps Microservices</i>", item_title_style),
            Paragraph("<b>Production Ready</b>", date_style)
        ]
    ]
    t2 = Table(p2_header, colWidths=[400, 140])
    t2.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t2)
    story.append(Paragraph("Stack: AWS EKS, Terraform, Kubernetes, ArgoCD, Docker, DevSecOps, GitHub Actions | URL: github.com/modimihir07/cloudmart-devops-project", item_sub_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Codified scalable AWS EKS infrastructure with Terraform modules, remote S3 backend state locking, and strict IAM boundaries.", bullet_style))
    story.append(Paragraph("• Implemented automated GitOps delivery using ArgoCD pull reconciliation to guarantee zero configuration drift across cluster environments.", bullet_style))
    story.append(Paragraph("• Automated container builds and vulnerability scanning gates in GitHub Actions with zero-downtime rolling updates.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 3: Digital Wallet
    p3_header = [
        [
            Paragraph("<b>Concurrent Digital Wallet & Payment Engine</b> | <i>High-Throughput Financial Core</i>", item_title_style),
            Paragraph("<b>100-Thread Stress Tested</b>", date_style)
        ]
    ]
    t3 = Table(p3_header, colWidths=[400, 140])
    t3.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t3)
    story.append(Paragraph("Stack: Java 17, Spring Boot 3, MySQL 8, Raw JDBC, H2, JUnit 5 | URL: github.com/modimihir07/digital-wallet-payment-system", item_sub_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Built financial ledger backend from scratch without an ORM using raw JDBC to enforce atomic ACID guarantees.", bullet_style))
    story.append(Paragraph("• Eliminated TOCTOU race conditions and circular deadlocks via deterministic alphanumeric account sorting and row-level locking (SELECT FOR UPDATE).", bullet_style))
    story.append(Paragraph("• Enforced idempotency key filtering and append-only double-entry bookkeeping; validated zero balance discrepancies under 100 concurrent threads.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 4: AgriAssist AI
    p4_header = [
        [
            Paragraph("<b>AgriAssist AI / GreenGuard AI</b> | <i>Google Solution Challenge 2026</i>", item_title_style),
            Paragraph("<b>Sub-3s Inference</b>", date_style)
        ]
    ]
    t4 = Table(p4_header, colWidths=[400, 140])
    t4.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t4)
    story.append(Paragraph("Stack: Gemini Multimodal Vision, TypeScript, Flutter, Firebase, Python | URL: github.com/modimihir07/AgriAssist-AI", item_sub_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Engineered multimodal crop disease diagnosis pipeline achieving sub-3s inference latency with tailored preventative treatment advisories.", bullet_style))
    story.append(Paragraph("• Designed offline-first local cache synchronization architecture ensuring full usability in remote agricultural field environments.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 5: Black Hole Physics Simulation
    p5_header = [
        [
            Paragraph("<b>Black Hole Relativistic Physics Simulation</b> | <i>Computational Physics Engine</i>", item_title_style),
            Paragraph("<b>Memory-Safe Systems</b>", date_style)
        ]
    ]
    t5 = Table(p5_header, colWidths=[400, 140])
    t5.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t5)
    story.append(Paragraph("Stack: Rust, Systems Programming, Numerical Relativity, Raymarching | URL: github.com/modimihir07/BlackHole-Simulation_Using_Rust", item_sub_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Implemented numerical Runge-Kutta geodesic integration under Schwarzschild metric with Doppler beaming and gravitational redshift simulation in Rust.", bullet_style))
    story.append(Spacer(1, 7))

    # 5. EDUCATION
    story.append(Paragraph("Education & Credentials", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=border_color, spaceBefore=1, spaceAfter=4))
    
    edu_header = [
        [
            Paragraph("<b>Bachelor of Technology in Computer Engineering</b> | Gandhinagar, Gujarat, India", item_title_style),
            Paragraph("<b>2025 -> Present</b>", date_style)
        ]
    ]
    t_edu = Table(edu_header, colWidths=[400, 140])
    t_edu.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu)
    story.append(Paragraph("• Relevant Coursework: Operating Systems, Distributed Systems, Database Management Systems (DBMS), Systems Programming, Computer Networks.", bullet_style))
    story.append(Paragraph("• Active open-source maintainer, daily Linux developer (Ubuntu/Mint), and systems architecture researcher.", bullet_style))

    doc.build(story)
    print(f"Resume generated successfully at {output_path}")

if __name__ == "__main__":
    out_file = os.path.abspath("public/resume.pdf")
    create_resume(out_file)
